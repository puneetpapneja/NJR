const mongoose = require("mongoose");
const { deleteById } = require("./applyJob");
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
    create: (fields)=>{
          const job = new jobCollection(fields);
          return job.save()
    },
    getAll: ()=>{
        return jobCollection.find()
    },
    deleteById:(id)=>jobCollection.deleteOne({_id: id}),
    update:(id,set)=>jobCollection.update({_id: id},set)
}