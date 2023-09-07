const express = require("express");
const { port } = require("./config");
const db = require('./database');
const userRoute = require('./routes/userRoute');
const JobRouter=require('./routes/jobPost');
const cors = require('cors');
// const multer=require('multer');

// const upload=multer({dest:"public/images/users"})

const app = express();

app.use(express.json());
app.use(cors());
app.use("/job",JobRouter);
app.use("/user",userRoute);
// app.use("/postJob",userRoute);
app.get("/",(req, res)=>{
res.send({status: "OK"});
});



app.listen(port,() => console.log("service started on port: ", port));