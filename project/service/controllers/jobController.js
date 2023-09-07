const jobModel = require("../models/jobModel");

module.exports = {
    create: (req,res)=>{
        // console.log(req.body);
        return jobModels.create(req.body)
        .then(()=>{
            return res.send({status:"ok",msg:"job created successfully"})
        })
        .catch((err)=>res.send({status:"fail",err:err}))
    },
    getAll: (req,res)=>{
        return jobModels.getAll()
        .then((allJobs)=>res.send(allJobs))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    getById: (req,res)=>{
        return jobModels.getById(req.body.id)
        .then((job)=>res.send(job))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    deleteById: (req,res)=>{
        return jobModels.deleteById(req.body.id)
        .then((deletedJob)=>res.send({status:"deleted",deletedJob:deletedJob}))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    update: (req,res)=>{
        return jobModels.update(req.body.id,req.body.fields)
        .then((updatedJob)=>res.send({status:"Ok",updatedJob:updatedJob}))
        .catch((err)=>res.send({status:"fail",error:err}))
    }
}