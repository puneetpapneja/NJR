const userModel = require('../models/userModel');

module.exports ={
    create:(req,res)=>{

        return userModel.create(req.body)
        .then((data)=>{
            return res.send({status: "ok", msg:"User created successfully."})
        })
        .catch((err)=>{
            return res.send({status: "fail",error: err});
        })
    },
    getAll:(req,res)=>{
        return userModel.getAll()
        .then((allUsers)=> res.send(allUsers))
        .catch((err)=> res.send({status:"fail",error:err}));
    },
    deleteById: (req,res)=>{
        return userModel.deleteById(req.body.id)
        .then((deletedUser) => res.send({status:"OK", msg:"User deleted successfully." ,deleteduser:deletedUser}))
        .catch((err)=> res.send({status: "fail", error:err}));
    },
    update:(req,res)=>{
        return userModel.update(req.body.id , req.body.fields)
        .then((updatedUser)=> res.send({status: "OK",msg:"User updated successfully.",updatedUser:updatedUser}))
        .catch((err)=> res.send({status: "Fail",error:err}));
    }
}