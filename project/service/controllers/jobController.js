const jobModels = require("../models/jobModels")

module.exports = {
    create: (req,res)=>{
        // console.log(req.body);
        return jobModels.create(req.body)
        .then((data)=>{
            return res.send({status:"ok",msg:"job created successfully",data:data._id})
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
    },
    getByFilters:(req,res)=>{
        // console.log("request ",req.body);
        return jobModels.getByFilters(req.body.search)
        .then((data)=>res.send(data))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    getByEmail:(req,res)=>{
        return jobModels.getByEmail(req.body.emailId)
        .then((data)=>res.send(data))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    updateApplyers:(req,res)=>{
        return jobModels.updateApplyers(req.body.id,req.body.fields)
        .then(()=>res.send({status:"ok",msg:"successfully applied"}))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    getAllForUser:(req,res)=>{
        return jobModels.getAllForUser(req.body.id)
        .then((data)=>res.send(data))
        .catch((err)=>res.send({status:"fail",error:err}))
    }
}