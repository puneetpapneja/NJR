const express = require("express");
const { port } = require("./config");
const userRoute=require("./routes/userRoute");
const jobRoute=require("./routes/jobRoute");

const db=require("./database.js");



const app = express();

app.use(express.json());
app.use("/user",userRoute);
app.use("/Job",jobRoute);
app.get("/health",(req, res)=>{
res.send({status: "OK"});
})

app.listen(port,() => console.log("service started", port));