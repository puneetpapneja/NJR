const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
     Jobtitle: String,
     description: String,
     maxsalary: Number,
     recuriterDtl:{
    name: String,
    emailId: String,
    contactNo: Number
     }
});

const jobCollection = mongoose.model("jobs",JobSchema);

module.exports = {
    create: (fields,res)=>{
        const job = new jobCollection(fields);
        return job.save();       
    },
    getAll: ()=> jobCollection.find(),
    deleteById: (id) => jobCollection.deleteOne({_id: id}),
    update: (id, fields) => jobCollection.updateOne({_id: id}, fields)
}