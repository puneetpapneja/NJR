const jobModel = require('../models/jobModel');

module.exports={
    create:(req,res)=>{

        return jobModel.create(req.body,res)
        .then((data)=>{
            return res.send({status: "ok", msg:"Job added successfully"})
        })
        .catch((err)=>{
            return res.send({Status: "fail" ,ERROR: err})
        })
    },
    getAll:(req,res)=>{
        return jobModel.getall()
        .then((allPost)=> res.send(allPost))
        .catch((err)=> res.send({status: "fail",Error:"err"}));
    },
    deleteById:(req,res)=>{
        return jobModel.deleteById(req.body.id)
        .then((jobdeleted)=>res.send({status:"OK",msg:"Job deleted successfully",jobdeleted:jobdeleted}))
        .catch((err)=> res.send({status: "fail",Error:"err"}));
    },
    update:(req,res)=>{
        return jobModel.update(req.body.id, req.body.fields)
        .then((updatedjob)=> res.send({status: "OK",msg:"Job updated successfully.",updatedjob:updatedjob}))
        .catch((err)=> res.send({status: "Fail",error:err}));
    }
}