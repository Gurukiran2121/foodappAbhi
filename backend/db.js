const mongoose = require('mongoose');
const mongouri="mongodb+srv://foodmern:1huloUfsRkcJKMea@cluster0.xapvirh.mongodb.net/foodmern?retryWrites=true&w=majority"


 async function mongo() {
  await mongoose.connect(mongouri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(async()=>{

    console.log("connected");
const fletchdata= await mongoose.connection.db.collection("fooditem").find({}).toArray((err,data)=>{
    if(err){
        console.log(err);
    }else{
      console.log(data);
    }
    
})

    const foodCatagory=await mongoose.connection.db.collection("sampel").find({}).toArray((err,data)=>{})
    global.foodcatagory = foodCatagory;
    global.fooddata = fletchdata;
   
   
  })
  .catch((e)=>{
    console.log(e);
  })

}

module.exports=mongo;
