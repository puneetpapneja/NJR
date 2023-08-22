const JobModel = require('../models/jobModule');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return JobModel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"Job created successfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    getAll: (req, res) => {
        return JobModel.getAll()
        .then((allUsers)=> res.send(allUsers))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        return JobModel.deleteById(req.body.id)
        .then((deletedJob) => res.send({status: "OK", msg: "Job deleted successfully.", deletedJob: deletedJob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return JobModel.update(req.body.id, req.body.fields)
        .then((updatedJob) =>  res.send({status: "OK", msg: "Job updated successfully.", updatedJob: updatedJob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    }
}