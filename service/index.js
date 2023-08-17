const express = require("express");
const { port } = require('./config');

const app = express();

const db = require('./database')

app.use(express.json());
// const port = 5000;

app.get("/health",(req, res)=>{
    res.send({status: "OK"});
})

app.listen(port,() => console.log("Service started.",port));