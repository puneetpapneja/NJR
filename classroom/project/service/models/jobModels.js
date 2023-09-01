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
    },
    applyers:[
        {
            _id:String,
            firstName:String,
            lastName:String,
            emailId:String
        }
    ]
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
    update: (id,fields)=>jobCollection.updateOne({_id:id},fields),
    getByFilters:(fields)=>{
        const regexp = new RegExp(`.*${fields}*.`,"i")
        return jobCollection.find({$or:[{title:{$regex: regexp}},{companyName:{$regex:regexp}}]})
    },
    getByEmail:(emailId)=>jobCollection.find({"recruiterDetails.emailId":emailId}),
    updateApplyers:(id,fields)=>jobCollection.updateOne({_id:id},{$push:{applyers:fields}}),
    getAllForUser:(id)=>jobCollection.find({applyers:{$elemMatch:{_id:id}}})
}