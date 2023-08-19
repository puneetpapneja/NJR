const jobModel = require('../models/posJob');
module.exports={
    create: (req,res)=>{
        return jobModel.create(req.body)
        .then((data)=>res.send({msg:'sucessfully posted job',data: data}))
        .catch((err)=>res.send({msg:'got a error',error:err}))
    },
    getAll:(req,res)=>{
        return jobModel.getAll()
        .then((data)=>res.send({data:data}))
        .catch((err)=>res.send({msg:'got a error',error:err}))
    },
    delete:(req,res)=>{
        return jobModel.deleteById(req.body)
        .then((data)=>res.send({msg:'deleted',data:data}))
        .catch((err)=>res.send({msg:'got a error',error:err}))
    },
    update:(req,res)=>{
        return jobModel.update(req.body)
        .then((data)=>res,send({msg:"changed given data",data:data}))
        .catch((err)=>res.send({msg:'got a error',error:err}))
    }
}