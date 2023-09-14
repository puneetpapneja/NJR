const mongoose = require("mongoose");
const jobSchema=mongoose.Schema({
      job_title: String,
      description: String,
      max_salary: Number,
      company_name: String,
      applied_candidates:[{
        _id:String,
        firstName: String,
        lastName:String,
        emailId:String,
        CV:String
      }],
      recruiter_dtls: {
        firstName:String,
        lastName:String,
        emailId:String,
        _id:String,
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
        return jobCollection.deleteOne({_id:id});
    },
    update: (id,fields)=>{
        return jobCollection.updateOne({_id:id},fields);
    },
    getSpecified: (field)=>{
        const regex = new RegExp(`.*${field}.*`, "i");
        return jobCollection.find({$or:[{job_title:{ $regex: regex} },{company_name:{ $regex: regex} }]});
    },
    findposted:(email)=>{
        console.log(email);
        return jobCollection.find({"recruiter_dtls.emailId" :email})
    },
    appliedids: (id,fields)=>{
        return jobCollection.updateOne({_id:id},{$push:{applied_candidates:fields}});
    }
}