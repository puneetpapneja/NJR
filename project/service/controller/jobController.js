const jobModel=require("../models/jobModel");

module.exports={
    create:(req,res)=>{
           return jobModel.create(req.body)
           .then((data)=>{
             return  res.send({status:"ok" ,msg:"job created successfully", data:data})
           })
           .catch((err)=>{
            return res.send({status:"fail", error:err});
           })
    },

    getAll:(req,res)=>{
            return jobModel.getAll()
            .then((alljob)=>{
               return  res.send(alljob)
            })
            .catch((err)=>{
              return   res.send({status:"fail", error:err})
            })
    },
    deleteById:(req,res)=>{
        return jobModel.deleteById(req.body.id)
        .then((deletejob)=>{
          return   res.send({status:"ok" ,msg:"job deleted successfully", data:deletejob})
        })
        .catch((err)=>{
           return res.send({status:"fail", error:err});
        })
    },

    update:(req,res)=>{
return jobModel.update(req.body.id,req.body.field)
.then((updatedjob) =>  res.send({status: "OK", msg: "job updated successfully.", updatedjob: updatedjob}))
.catch((err)=> res.send({status:"fail", errro: err}));
    }
}