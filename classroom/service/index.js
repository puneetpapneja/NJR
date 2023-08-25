const express = require("express");
// const { port } = require("./config");
const db = require('./database');
const userRoute = require('./routes/userRoute');
const jobRoute = require('./routes/jobRoute');

const app = express();

app.use(express.json());
// app.use("/user",userRoute);
// app.get("/health",(req, res)=>{
// res.send({status: "OK"});
// });
app.use("/jobs",jobRoute);
const port =5500;

app.listen(port,() => console.log("service started on port: ", port));