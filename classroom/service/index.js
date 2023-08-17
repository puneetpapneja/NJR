<<<<<<< HEAD
=======
const express = require("express");
const { port } = require("./config");
const db = require('./database');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());
app.use("/user",userRoute);
app.get("/health",(req, res)=>{
res.send({status: "OK"});
});



app.listen(port,() => console.log("service started on port: ", port));
>>>>>>> 35c631b979082a6d981284c5b5ae3840bb920d4b
