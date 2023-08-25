const mongoose = require("mongoose");
<<<<<<< HEAD
mongoose.connect("mongodb://127.0.0.1:27017/practice");
const con=mongoose.connection;
con.on('connected',()=>{
    console.log("database connected");
})
con.on('disconnected',()=>{
    console.log("database disconnected");
})
con.on('error',()=>{
    console.log("ERROR: database connection error");
})
=======

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const con = mongoose.connection;

con.on('connected', ()=> {
    console.log("database connected");
})

con.on('disconnected', ()=> {
    console.log("database disconnected");
})


con.on('error', ()=> {
    console.log("ERROR: database connection error");
})

module.exports = con;

>>>>>>> d8595ad42d20a4349d702758e3b0ae85f4b55dab
