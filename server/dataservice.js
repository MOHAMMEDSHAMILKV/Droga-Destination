const db=require("./db")





const login=(username,password)=>{
    return db.User.findOne({"username":username,"password":password})
    .then(user=>{
      if(user){
        currentname=user.username

       
        return{
          statuscode:206,
          status:true,
          msg:"logged in successfully",
          currentname,
          data:user
          
        }
      }else{
        return{
          statuscode:402,
          status:false,
          msg:"login failed"
        }
      }
    })

  }


  const register=(name,gender,phoneNo, username,password)=>{
    return db.User.findOne({username})
    .then(user=>{
      if(user){
        return{
          statuscode:422,
          status:false,
          message:"user alredy existed"
        }
      }else{
        const newUser=new db.User({
          name,
          gender ,
          phoneNo,
          username,
          password,
         
         
        })
        newUser.save()
        return{
          statuscode:206,
          status:true,
          message:"user created successfully"
        }
      }
    })

  }



  module.exports={login,register}