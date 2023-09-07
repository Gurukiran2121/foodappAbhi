const express=require("express")
const router=express.Router()
const user=require("../modules/Usere")
const bcrypt=require("bcryptjs")
let jsw=require("jsonwebtoken")
const { body, validationResult } = require('express-validator');
const jwtScreat="raefsc65rbukytvt4srcerscjytdfky"
router.post("/createuser",body('email').isEmail(),body('password').isLength({ min: 5 }),async (req,res)=>{


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let salt=await bcrypt.genSalt(10)
    let secpass=await bcrypt.hash(req.body.password,salt)
  try {
       await user.create({
        name:req.body.name,
    email:req.body.email,
    password:secpass,
    location:req.body.location
        })
        res.json({sucess:true})
    } catch (error) {
        console.log((error));
        res.json({sucess:false})
    }
})

router.post("/loginuser",body('email').isEmail(),body('password').isLength({ min: 5 }),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email;
 try {
     let userdata= await user.findOne({email})
     if(!userdata){
        return res.status(400).json({ errors: "try login with correct email" })
     }
     const pwtcompare=await bcrypt.compare(req.body.password,userdata.password) //compare user pass to storage password using byscript

     if(!pwtcompare){
        return res.status(400).json({ errors: "try login with correct password" })
     }
     const data={
      user:{
        id:userdata.id
      }
     }
     const authtoken=jsw.sign(data,jwtScreat) //we canalso add ecpaire time in authoken like banking sysatems
       return res.json({sucess:true,authtoken:authtoken})
   } catch (error) {
       console.log((error));
        res.json({sucess:false})
    }
})
module.exports=router