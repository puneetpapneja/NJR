const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
    jobTitle: String,
    jobDescription: String,
    maxSalary:Number,
    companyName:String,
    recruiterDtl :{
        name:String,
        emailId:String,
        contactNo:Number
    }
});

const jobCollection = mongoose.model("job",jobSchema);

module.exports = {
    create: (field,res)=>{
        const job = new jobCollection(field);
        return job.save()
    },
    getall:()=>jobCollection.find(),
    deleteById:(id)=>jobCollection.deleteOne({_id:id}),
    update:(id,field)=>jobCollection.updateOne({_id:id,field}),
    searchjob:(keyword)=>jobCollection.find({$or:[{jobTitle:/.*keyword*./} ,  {companyName: /.*keyword*./} , {_id:/.*keyword*./}]})
}