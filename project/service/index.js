const express = require("express");
const { port } = require("./config");
const userRoute=require("./routes/userRoute");
const jobRoute=require("./routes/jobRoute");

const db=require("./database");



const app = express();

app.use(express.json());
app.use("/user",userRoute);
app.use("/job",jobRoute);

app.get("/health",(req,res)=>{
    res.send({status:"ok"});
});



app.listen(port,() => console.log("service started", port));