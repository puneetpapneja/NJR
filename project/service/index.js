const express = require("express");
const { port } = require("./config");
const db = require('./database');
const userRoute = require('./routes/userRoute');
const jobRoutes=require('./routes/posjobRoutes')
const applyRoutes=require('./routes/apply')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/job",jobRoutes);
app.use("/user",userRoute);
app.use("/appliedjob",applyRoutes);




app.listen(port, () => console.log("service started on port: ", port));