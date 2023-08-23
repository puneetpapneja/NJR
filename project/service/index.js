const express = require("express");
const { port } = require("./config");
const db = require('./database');
const userRoute = require('./routes/userRoute');
const jobRoutes=require('./routes/posjobRoutes')
const applyRoutes=require('./routes/apply')
<<<<<<< HEAD

const app = express();

app.use(express.json());
=======
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
app.use("/job",jobRoutes);
app.use("/user",userRoute);
app.use("/appliedjob",applyRoutes);




app.listen(port, () => console.log("service started on port: ", port));