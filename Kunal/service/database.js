const  mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practice");
const con=mongoose.connection;

con.on("connected",()=>{
    console.log("connected to the database")
});
con.on("disconnected",()=>{
    console.log(" disconnected to the database")
});

con.on("error",()=>{
    console.log("error with the database")
})

module.exports=con;