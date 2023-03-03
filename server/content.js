const db=require("./db")

const content=(placename,imageUrl,details,field)=>{
    return db.Content.findOne({placename})
    .then(user=>{
      if(user){
        return{
          statuscode:422,
          status:false,
          msg:"place already added",
         
        }
      }else{
        const newContent=new db.Content({
            placename,
            imageUrl,
            details,
            field
         
         
        })
        newContent.save()
        return{
          statuscode:206,
          status:true,
          msg:"place added successfully",
        
        }
      }
    })

  }

  const contentlist=()=>{
    return db.Content.find()
    .then(data=>{
        if(data){
            return{
                statuscode:200,
                status:true,
                message:"content show successful",
                data:data
            }
        }
    })
  }

  const deletecontent = (placename)=>{
    return db.Content.deleteOne({placename})
    .then((rslt)=>{
      if(rslt){
        return {
          rslt,
          status:true,
          message:"Deleted successfully",
          statuscode:200,
          "placename":placename
        }
      }
      else{
        return{
          status:false,
          message:"Delete failed",
          statuscode:400
        }
      }
    })
  }
  module.exports={content,contentlist,deletecontent}