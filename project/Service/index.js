const express=require("express");
const {port}=require("./config");
const jobRoute = require('./Route/jobRoute');
const userRoute=require('./Route/userRoute');
const db=require('./database');
const app=express();
const cors = require('cors');
app.use(express.json());
app.use(cors())
app.use("/job",jobRoute);
app.use("/user",userRoute);
app.listen(port,()=>console.log("service started on port:",port));