const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    appliedJob : String ,
    companyName : String ,
    emailId : String ,
    password : String ,
    type : String ,
    Location : String 
});

const jobCollection = mongooose.model("jobs",jobSchema);

module.exports = {
    create: (fields, res)=>{
        const job = new jobCollection(fields);
        return job.save()
        .then((date)=>{
            return res.send({status:"ok",msg:"Job applied successfully"})
        })
        .catch((err)=>{
            return res.send({status:"fail",error: err});
        })
    }
}