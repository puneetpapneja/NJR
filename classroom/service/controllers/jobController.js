const jobModel = require('../models/jobModel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return jobModel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"job created successfully.", data: data})
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
        .then((deletedJob) => res.send({status: "OK", msg: "job deleted successfully.", deletedJob: deletedJob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return jobModel.update(req.body.id, req.body.fields)
        .then((updatedJob) =>  res.send({status: "OK", msg: "job updated successfully.", updatedJob: updatedJob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    }
}