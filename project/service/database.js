const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const con = mongoose.connection;

con.on("connected", () => {
  console.log("DB connected");
});

con.on("disconnected", () => {
  console.log("DB disconnected");
});

con.on("error", () => {
  console.log("DB error");
});

module.exports = con;