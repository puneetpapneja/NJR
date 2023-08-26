const express =require("express");
const userRoute = require("./routes/userRoute");
const jobRoute=require("./routes/jobRoute")
const db=require("./database")
const cors = require('cors');
const app=express();

app.use(express.json());
app.use(cors());
app.use("/user",userRoute);
app.use("/job",jobRoute);
app.listen(5000,()=>{
    console.log("successfully connected");
})
