const jobModel = require('../models/jobModel');

module.exports={
    create:(req,res)=>{
        return jobModel.create(req.body,res)
        .then((data) => {
            return res.send({status: "ok", msg:"User created successfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    
    getAll: (req, res) => {
        return jobModel.getAll()
        .then((allUsers)=> res.send(allUsers))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        return jobModel.deleteById(req.body.id)
        .then((deletedJob) => res.send({status: "OK", msg: "email deleted successfully.", deletedJob: deletedJob}))
        .catch((err)=> res.send({status:"fail", error: err}));
    },
    update: (req,res)=> {
        return jobModel.update(req.body.id, req.body.fields)
        .then((updatedJob) =>  res.send({status: "OK", msg: "email updated successfully.", updatedJob: updatedJob}))
        .catch((err)=> res.send({status:"fail", error: err}));
    }
}