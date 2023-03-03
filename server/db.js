const mongoose=require('mongoose')

//state connection string

mongoose.connect('mongodb://localhost:27017/TripBoss',{
    useNewUrlparser:true}) // node=>mongodb

    //model creation collections
const User=mongoose.model('User',{
   name:String,
   
   gender:String,
   phoneNo:Number,
    username:String,
    password:String,
   

  
});
const Content=mongoose.model('Content',{
    placename:String,
    imageUrl:String,
    details:String,
    field:String
  
});
  
module.exports={User,Content}