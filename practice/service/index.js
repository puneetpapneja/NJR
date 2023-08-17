const express = require ("express");

const app = express();

app.use(express.json());
const port = 5000;
app.listen(5000,() => console.log("service started",port));