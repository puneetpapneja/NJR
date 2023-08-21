const express = require("express");
const { port } = require("./config");
const db = require("./database");
const jobRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());
app.use("/job", jobRoute);
app.use("/user", userRoute);
app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(port, () => console.log("service started on port: ", port));
