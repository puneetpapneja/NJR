const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    jobTitle : String ,
    companyName : String ,
    maxSalary : String,
    description : String,
    recuriterDtl :{
        name : String,
        emailId: String,
        contactNo : String 
    }
});

const jobCollection = mongoose.model("jobs",jobSchema);

module.exports = {
    create: (fields)=>{
        const job = new jobCollection(fields);
        return job.save()
    },
    getAll: ()=> userCollection.find(),
    deleteById: (id) => userCollection.deleteOne({_id: id}),
    update: (id, fields) => userCollection.updateOne({_id:id},fields)
}