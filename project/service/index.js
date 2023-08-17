const express = require("express");
const { port } = require("./config");
const db=require('./database');
const userRoute=require('../controller/userController');

const app= express();

app.use(express.json());


app.get('/health',(req,res)=>{
    res.send({status: "hello"})
});

app.use(express.json);



app.listen(port,() => console.log("service started on port:",port));
