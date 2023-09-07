const { Try } = require("@mui/icons-material")
const express = require("express")
const router = express.Router()

router.post("/fooddata", (req, res) => {
    try {
       
        res.send([global.fooddata,global.foodcatagory])
       
    } catch (error) {
        res.send("server error")
        console.log("er4ror ");
    }
})
module.exports = router;