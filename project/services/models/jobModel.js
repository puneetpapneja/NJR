const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    JobTitle : String,
    Description : String,
    MaxSalary : String,
    CompanyName : String,
    RecruiterDtl : {
        Name : String,
        EmailId : String,
        ContactNo : String
    } 
});

const jobCollection = mongoose.model("Jobs", jobSchema);

module.exports = {
    create: (fields)=>{
        const job = new jobCollection(fields);
        return job.save();       
    },
    getAll: ()=> jobCollection.find(),
    deleteById: (id) => jobCollection.deleteOne({_id: id}),
    update: (id, fields) => jobCollection.updateOne({_id: id}, fields)
}