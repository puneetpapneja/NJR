const express = require("express");
const {port} = require("./config.js");
const db=require("./database.js");
const app = express();
app.use(express.json());
app.get("/health",(req,res)=>{
    res.send({status:"ok"});
})
const port=5000;
app.listen(port,()=> Console.log("service started on port:",port));