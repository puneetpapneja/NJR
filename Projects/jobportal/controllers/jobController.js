const jobModel = require('../models/jobModel');
const JobModel= require('../models/jobModel');

module.exports={
    create:(req, res)=>{
        return jobModel.create(req.body)
        .then((data)=>{
            return res.send({status:"ok", msg:"job created successfully", data:data})
        })
        .catch((err)=>{
            return res.send({status:"fail", error:err});
        });
    },
    
getAll: (req, res)=>{
    return JobModel.getAll()
    .then((allUsers)=> res.send(allUsers))
    .catch((err)=> res.send({status:"fail", error:err, code:500}));
},

deletebyId: (req, res)=>{
    return JobModel.deletebyId(req.body.id)
    .then((deleteJob)=> res.send({status:"OK", msg:"job deleted successfully", deleteJob:deleteJob}))
    .catch((err)=> res.send({status:"fail", error:err}));   
},

update:(req, res)=>{
    return JobModel.update(req.body.id, req.body.fields)
    .then((updateJob)=> res.send({status:"ok", msg:"job updates successfully", updateJob:updateJob}))
    .catch((err)=> res.send({status:"fail", error:err, code:500}));
}
};
