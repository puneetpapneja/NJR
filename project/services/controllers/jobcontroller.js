const jobmodel = require('../models/jobmodel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return jobmodel.create(req.body, res);
        return jobmodel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"Jobs created successfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    getAll: (req, res) => {
        return jobmodel.getAll()
        .then((allJobs)=> res.send(allJobs))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        return jobmodel.deleteById(req.body.id)
        .then((deletedJob) => res.send({status: "OK", msg: "Job deleted successfully.", deletedJob: deletedJob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return jobmodel.update(req.body.id, req.body.fields)
        .then((updatedJob) =>  res.send({status: "OK", msg: "Job updated successfully.", updatedJob: updatedJob}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    }
}