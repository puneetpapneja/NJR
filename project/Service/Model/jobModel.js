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
});

const jobCollection = mongoose.model("jobs",jobSchema);
module.exports={
    create: (fields)=>{
          const job = new jobCollection(fields);
          return job.save()
    },
    getAll: ()=> jobCollection.find(),
    deleteById: (id)=>{
        jobCollection.deleteOne({_id:id});
    },
    update: (id,fields)=>{
        jobCollection.updateOne({_id:id},fields);
    },
    getSpecified: (title)=>{
        return jobCollection.find({job_title:title});
    }
    }