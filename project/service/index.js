const express = require("express");

const db = require("./database");
const jobRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/userRoute");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 5001;

app.get('/', (req, res) => {
  res.status(200).json({Message: "Hello world"})
})
app.use("/job", jobRoute);
app.use("/user", userRoute);
app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})