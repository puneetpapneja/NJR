const jobModel = require('../Model/jobModel');

module.exports={
    create: (req,res)=>{
        console.log(req.body);
        return jobModel.create(req.body)
        .then((data)=>{
            return res.send({status: "ok", msg: "job posted successfully"})
        })
        .catch((err)=>{
            return res.send({status:"fail", error:err})
        })
    },
    getAll: (req,res)=>{
        return jobModel.getAll()
        .then((allJobs)=>res.send(allJobs))
        .catch((err)=>res.send({status:"fail",err:(err)}))
    },
    deleteById: (req,res)=>{
        return jobModel.deleteById(req.body.id)
        .then((allJobs)=>res.send({status:"Ok",msg : "job deleted successfully"}))
        .catch((err)=>res.send({status:"fail",err:(err)}))
    },
    update: (req,res)=>{
        return jobModel.update(req.body.id, req.body.fields)
        .then((updatedjobdtls)=>res.send({status:"ok",msg: "job details updated successfully"}))
        .catch((err)=>res.send({status:"fail",err:(err)}))
    },
    getSpecified: (req,res)=>{
        console.log(req.body.title);
        // console.log(jobModel.getSpecified(req.body.title));
        return jobModel.getSpecified(req.body.title)
        .then((matchedJobs)=>{res.send(matchedJobs);
        console.log(matchedJobs);})
        .catch((err)=>res.send({status:"fail",err:(err)}))
    }
}