const express = require("express");

constapp = express();

app.use(express.json());


app.get("/health" , (req, res) => {
    res.send({status : "Ok" });
})

app.listen(port, () => console.log("service started", port));
