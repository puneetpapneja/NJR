const mongoose = require("mongoose");

const postJobSchema=mongoose.Schema({
    jobTitle:String,
    description:String,
    maxSalary:Number,
    companyName:String,
    recruiterdt1:{
        name:{
            type:String,
            required:[true,"plz provide your name"]
            
        },
        emailId:{
            type:String,
            required:[true,"plz provide your emailId"],
            unique:true
        },
        contactNo:String
    }
})


const postJobModel = mongoose.model("postAjob",postJobSchema);

module.exports = postJobModel;
