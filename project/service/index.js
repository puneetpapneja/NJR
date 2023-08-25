const express = require("express");
const {port} =require("./config");
const db = require('./database');
const userRoute=require('./routes/userRoute');
const jobRoute = require('./routes/jobRoute');
const cors = require('cors');


const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow the desired HTTP methods
  allowedHeaders: ['Content-Type'], // Allow the desired headers
}));

app.use(express.json());
app.use("/user",userRoute);
app.use("/job",jobRoute);
app.get("/health",(req,res)=>{
    res.send({status: "OK"});
});

app.listen(port,()=> console.log("services started on port: ",port));