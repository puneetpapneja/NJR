const express = require("express");



const app = express();

app.use(express.json());

app.get("/health",(req, res)=>{
    
})

app.listen(port,() => console.log("service started", port));