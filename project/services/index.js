const express = require("express");
const { port } = require("./config");
const db = require(".database");
const userRoute = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/job", jobRoutes);

app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(port, () => console.log("service started on port: ", port));
