const express = require("express");

const app = express();

app.use(express.json());

app.get("/health",(req, res)=>{
    res.send({status: "ok"});
})
const port = 5000;

app.listen(port,() => console.log("service started",port));
