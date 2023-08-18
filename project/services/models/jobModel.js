const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    jobTitle: String,
    jobDescription: String,
    maxSalary:Number,
    companyName: String,
    recruiterDtl : {
        name:String,
        emailId:String,
        contactNo:Number
    }
});

const jobCollection = mongoose.model("job", jobSchema);

module.exports = {
    create: (fields,res)=>{
        const job = new jobCollection(fields);
        return job.save()  
        .then((data) => {
            return res.send({status: "ok", msg:"job added succesfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });  
    },
    getAll: ()=> jobCollection.find(),
    deleteById: (id) => jobCollection.deleteOne({_id: id}),
    update: (id, fields) => jobCollection.updateOne({_id: id}, fields)
}
