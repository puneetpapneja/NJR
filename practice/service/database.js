const mongoose = require("mongoose");

mongoose.connect("");

const con = mongoose.connection;

con.on('connect', () => (
    console.log("Connected to MongoDB")
))
con.on('disconnect', () => (
    console.log("disconnect to MongoDB")
))
con.on('error', () => (
    console.log("error")
))

module.exports = con;