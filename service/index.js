const express = require("express");
const PORT = require('\.config')
const app = express();

app.use(express.json());
// const port = 5000;

app.get("/health",(req,res)=>{
    res.send
})

app.listen, (port,() => console.log("Service started.",port));