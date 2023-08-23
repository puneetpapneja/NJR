const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    jobtitle: String ,
    jobdesc: String,
    jobsal: Number,
})

const UserModel = mongoose.model("users",userschema)
module.exports= UserModel