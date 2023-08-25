const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    maxSalary: String,
    companyName: String,
    recruiterDetails: {
        _id: String,
        firstName: String,
        lastName: String,
        emailId: String
    }
});

const jobCollection = mongoose.model("Job",jobSchema);

module.exports={
    create:(fields)=>{
        // console.log(fields);
        const job = new jobCollection(fields);
        return job.save();
    },
    getAll:()=>jobCollection.find(),
    getById:(id)=>jobCollection.find({_id:id}),
    deleteById: (id)=>jobCollection.deleteOne({_id:id}),
    update: (id,fields)=>jobCollection.updateOne({_id:id},fields)
}
