const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/practice');
const con= mongoose.connection;
con.on("connected",()=>{
    console.log("Connection established");
})
con.on("disconnected",()=>{
    console.log("disconnected from database");
})
con.on("error",()=>{
    console.log("error in connection");
})

module.export = con;