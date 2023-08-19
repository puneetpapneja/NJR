const express = require("express");
const { port } = require("./config");
const db = require('./database');
//const userRoute = require('./routes/userRoute');
const JobRoute = require('./routes/jobRoute');
const app = express();

app.use(express.json());
//app.use("/user",userRoute);
app.use("/Job",JobRoute);
app.get("/health",(req, res)=>{
res.send({status: "OK"});
});
app.listen(port,() => console.log("service started on port: ", port));
