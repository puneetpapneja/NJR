const express = require("express");

const { PORT, port } = require("./config");

const app=express();

app.use(express.json());

app.get("/health", (req, res)=>{
    res.send({status:"OK"})
});

app.listen(port, ()=> console.log("services started", port));

