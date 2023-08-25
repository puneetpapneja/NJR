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
        return Job.save();
    },

        getAll: ()=> JobCollection.find(),
       deleteById: (id) => JobCollection.deleteOne({_id: id}),
       update: (id, fields) => JobCollection.updateOne({_id: id}, fields),
       search:(keyword)=>JobCollection.find({$or:[{jobTitle:/.*keyword*./},{companyName:/.*keyword*./},{_id:/.*keyword*./}]})
    }