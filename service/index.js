const express = require("express");
const { port } = require('./config');
const db = require('./database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
// const port = 5000;
app.use("/user", userRoutes);



app.listen(port,() => console.log("Service started on port:",port));