const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
    jobTitle: String,
    jobDescription: String,
    maxSalary:Number,
    companyName:String,
    recruiterDtl :{
        name:String,
        emailId:String,
        contactNo:Number
    }
});

const jobCollection = mongoose.model("job",jobSchema);

module.exports = {
    create: (field,res)=>{
        const job = new jobCollection(field);
        return job.save()
        .then((data)=>{
            return res.send({status: "ok", msg:"Job added successfully"})
        })
        .catch((err)=>{
            return res.send({Status: "fail" ,ERROR: err})
        })
    }
}