const express = require("express");
const { port } = require("./config");
const db = require("./database");
const userRoute = require("./routes/userRoute");
const jobRoute = require("./routes/jobRoute");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/job", jobRoute);

app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(port, () => console.log("service started", port));
