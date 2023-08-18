const express = require("express");

const app = express();

app.use(express.json());

app.get("/health",(req, res)=>{
    res.send({status:"OK"})
})

app.listen(5000,() => console.log("service started", 5000));