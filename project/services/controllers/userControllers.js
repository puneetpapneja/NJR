const userModel = require('../models/userModel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return userModel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"User created successfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    getAll: (req, res) => {
        return userModel.getAll()
        .then((allUsers)=> res.send(allUsers))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        return userModel.deleteById(req.body.id)
        .then((deletedUser) => res.send({status: "OK", msg: "User deleted successfully.", deletedUser: deletedUser}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return userModel.update(req.body.id, req.body.fields)
        .then((updatedUser) =>  res.send({status: "OK", msg: "User updated successfully.", updatedUser: updatedUser}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    }
}