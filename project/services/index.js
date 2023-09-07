const express = require("express");
const userRoute = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const db = require("./database");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/job", jobRoutes);
app.listen(5000, () => {
  console.log(" successfully connected");
});
