const express = request ("express");
const PORT = require ("./config")
const app = express();

app.use(express.json());

app.get("/health",(req,res)=>(
    res.send()
))

app.listen(port,() => console.log("service started",port));