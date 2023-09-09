const mongoose = require("mongoose");
const jobSchema=mongoose.Schema({
    JobTitle:String,
     description:String,
     maxSalary:String,
     companyName:String,
    recuriterDtl:{
        name:String,
        emailId:String,
        contactNo:String
    }
});

// job crud operations-----
const jobCollection=mongoose.model("job",jobSchema);
module.exports={
    create:(fields)=>{
       const job=new jobCollection(fields);
       console.log(job);
       return job.save();
    },
    getAll:()=>jobCollection.find(),
    deleteById:(jobid)=> jobCollection.deleteOne({_id:jobid}),
     update:(id,fields)=>jobCollection.updateOne({_id:id},fields)  
}