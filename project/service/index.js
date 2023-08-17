const express = request("express");
const PORT = require("./config")
const app = express();

app.use(express.json());

app.get("/health",(req.send));


app.listen(port,() => console.log("service strted", port));