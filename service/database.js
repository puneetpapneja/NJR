const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const con = mongoose.connection;

con.on('connected', ()=> {
    console.log("database connected");
})

con.on('disconnected', ()=> {
    console.log("database disconnected");
})

con.on('error', ()=> {
    console.log("database connection error");
})

module.exports = con;