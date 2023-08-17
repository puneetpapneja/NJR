const express =require("express");
const app=express();
app.use(express.json());  //middleware man 

const port =5000;

app.get("/health",(req,res)=>{
res.send({sta})
})
app.listen(port,()=>console.log("service  started" ,));