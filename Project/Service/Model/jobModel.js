const mongoose = require("mongoose");
const jobSchema=mongoose.Schema({
      job_title: String,
      description: String,
      max_salary: Number,
      company_name: String,
      recruiter_dtls: {
        name:String,
        emailId:String,
        contactNo: String
      }
})

const jobCollection = mongoose.model("jobs",jobSchema);
module.exports={
    create: (fields,res)=>{
          const job = new jobCollection(fields);
          return job.save()
          .then((data)=>{
              return res.send({status: "ok", msg: "job posted successfully"})
          })
          .catch((err)=>{
              return res.send({status:"fail", error:err})
          })
    }
}