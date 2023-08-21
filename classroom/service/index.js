const express = require("express");
const { port } = require("./config");
const db = require('./database');
// 3 process is 1

const userRoute = require('./routes/userRoute');
app.use("/user",userRoute); // this 2 is for process number 10



/// this 2 procces is for 2
const app = express();
app.use(express.json());

app.listen(port,() => console.log("service started on port: ", port));