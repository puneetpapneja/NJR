const mongoose =require("mongoose");

const userSchema=mongoose.Schema({
    job_title:String,
    description:String,
    max_salary:Number,
    comapny_name: String,
    recruiterDtle:{
        name:String,
        emailID:String,
        contactno:Number
    }
});

const jobCollection = mongoose.model("Job", JobSchema);

module.exports={
    create:(fields, res)=>{
        const Job=new jobCollection(fields);
        return Job.save()
        },
        getAll:()=> jobCollection.find(),
        deletebyId:(id)=> jobCollection.deleteOne({_id:id}),
        update:(id, fields)=> jobCollection.updateOne({_id: id}, fields)
    }