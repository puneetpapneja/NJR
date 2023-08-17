const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practice");
const con=mongoose.connection;
con.on("connected",()=>{
    console.log("Database connected")
})
con.on("disconnected",()=>{
    console.log("Database disconnected")
})
con.on("error",()=>{
    console.log("ERROR: Database connection error")
})
module.exports()