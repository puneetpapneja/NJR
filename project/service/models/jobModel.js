const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
     Job_title:String,
     description:String,
     max_salary:Number,
    recuriterDtl:{
    name:String,
    emailId:String,
    contactNo:Number
     }
});

const JobCollection = mongoose.model("Job", JobSchema);

module.exports = {
    create: (fields, res)=>{
        const Job = new JobCollection(fields);
        return Job.save()
        .then((data) => {
            return res.send({status: "ok", msg:"Job created successfully."})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        })
    }
}
