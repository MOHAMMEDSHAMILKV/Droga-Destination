const express=require('express')
const res = require('express/lib/response')
const ds=require("./dataservice")
const cors=require('cors')
const dc=require("./content")


//app creation

const app=express()
app.use(express.json())

const appMiddleware=(req,res,next)=>{
  console.log("application specific middleware");
  next()
}
app.use(cors({
  origin:'*'
}))

app.use(appMiddleware) 

//resolving http req





app.post('/login',(req,res)=>{
  ds.login(req.body.username,req.body.password)
 .then(user=>{
  if(user){
    res.status(user.statuscode).json(user)
  }
 })
})

app.post('/register',(req,res)=>{
    ds.register(req.body.name,req.body.gender,req.body.phoneNo,req.body.username,req.body.password)
    .then(user=>{
      if(user){
        res.status(user.statuscode).json(user)
      }
    })
    
})

// content

app.post('/content', (req, res) => {
  dc.content(req.body.placename,req.body.imageUrl,req.body.details,req.body.field)
  .then(user=>{
   if(user){
     res.status(user.statuscode).json(user)
   }
  })
});

app.get('/admin', (req, res) => {
  dc.contentlist()
  .then(data=>{
    res.status(data.statuscode).json(data)
  })
});

app.delete('/admin/:placename',(req,res)=> {
  dc.deletecontent(req.params.placename)
  .then(data =>{
    if (data) {
      console.log(data)
      res.status(data.statuscode).json(data)
    }
  })
})


app.listen(3000,()=>(
    console.log("server listening to port number 3000")
))

