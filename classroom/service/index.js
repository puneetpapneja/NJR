const express = require("express");
const { port } = require("./config");
const db = require('./database');
const userRoute = require('./routes/userRoute');
const postJobRoute=require('./routes/jobPost');

const app = express();

app.use(express.json());
app.use("/",postJobRoute);
app.use("/user",userRoute);
// app.use("/postJob",userRoute);
app.get("/",(req, res)=>{
res.send({status: "OK"});
});



app.listen(port,() => console.log("service started on port: ", port));