const applyJob= require('../models/applyJob')

module.exports={
    create: (req,res)=>{
        return applyJob.applied(req.body)
        .then((data)=>{res.send({status: 'ok' ,msg :'your applied to job ',data:data})})
        .catch((err)=>res.send({status:'fail', msg:'got error',error: err}))
    },
    getAll: (req,res)=>{
        return applyJob.getrcd()
        .then((data)=>res.send(data))
        .catch((err)=>res.send({status:'ok',msg:"got error",error:err,code:500}))
    },
    Withdraw:(req,res)=>{
        return applyJob.deleteById(req.body)
        .then((data)=>res.send({msg:"withdraw done",data :data}))
        .catch((err)=>res.send({status:'ok',msg:"got error",error:err,code:500}))
    }
}