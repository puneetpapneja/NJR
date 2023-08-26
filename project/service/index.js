const express = require("express");
const { port } = require("./config");
const db = require("./database");
const userRoute = require("./routes/userRoute");
const cors = require("cors");

const jobRoute = require("./routes/jobRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/job", jobRoute);

app.listen(port, () => console.log("service started on port: ", port));
