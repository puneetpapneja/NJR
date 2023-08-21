const userModels = require("../models/userModels")

module.exports = {
    create: (req,res)=>{
        return userModels.create(req.body)
        .then((data)=>{
            return res.send({status:"ok",msg:"user created successfully", data:data})
        })
        .catch((err)=>res.send({status:"fail",err:err}))
    },
    getAll: (req,res)=>{
        return userModels.getAll()
        .then((allUser)=>res.send(allUser))
        .catch((err)=>res.send({status:"fail", error:err,code:500})) 
    },
    deleteById:(req,res) =>{
        return userModels.deleteById(req.body.id)
        .then((deletedUser)=>res.send({status:"Ok", msg:"user deleted",deletedUser:deletedUser}))
        .catch((err)=>res.send({status:"fail",error:err}))
    },
    update:(req,res)=>{
        return userModels.update(req.body.id,req.body.fields)
        .then((updatedUser) =>  res.send({status: "OK", msg: "User updated successfully.", updatedUser: updatedUser}))
        .catch((err)=>res.send({status:"fail",error:err}))
    }
}