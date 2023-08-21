const jobModel = require('../models/jobModel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return jobModel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"Job created successfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    getAll: (req, res) => {
        return jobModel.getAll()
        .then((alljobs)=> res.send(alljobs))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        return jobModel.deleteById(req.body.id)
        .then((deletedjob) => res.send({status: "OK", msg: "job deleted successfully.", deletedjob: deletedjob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return jobModel.update(req.body.id, req.body.fields)
        .then((updatedjob) =>  res.send({status: "OK", msg: "job updated successfully.", updatedjob: updatedjob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    getSpecified: (req,res)=>{
        console.log(req.body.title);
        console.log(jobModel.getSpecified(req.body.title));
        return jobModel.getSpecified(req.body.title)
        .then((matchedJobs)=>res.send(matchedJobs))
        .catch((err)=>res.send({status:"fail",err:(err)}))
}
}