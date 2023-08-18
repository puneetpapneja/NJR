const express = require("express");
// const port=5000;
const {port} = require("")
 const app = express();

app.use(express.json());

app.get("/health",(req, res));

// const port = 5000;
app.listen(port,() => console.log("service started", port));