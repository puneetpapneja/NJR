const userModel = require('../models/userModel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return userModel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"User created successfully."});
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        })
    },
    getAll: (req, res) => {
        return userModel.getAll()
        .then((allUsers)=> res.send(allUsers))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        console.log(req.body.id);
        return userModel.deleteById(req.body.id)
        .then((deletedUser) => res.send({status: "OK", msg: "User deleted successfully.", deletedUser: deletedUser}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return userModel.update(req.body.id, req.body.fields)
        .then((updatedUser) =>  res.send({status: "OK", msg: "User updated successfully.", updatedUser: updatedUser}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    // loginValidation:(req,res)=>{
    //     console.log(req.body.password);
    //     return userModel.findSpecified(req.body.email)
    //     .then((userData)=>{
    //         let validUser=0;
    //         console.log(userData);
    //         if(req.body.password==userData[0].password){
    //             validUser=1;
    //             res.send({status:"Ok",msg:"login successfull"});}
    //         else{res.send({status:"fail",msg:"invalid password"})}
    //     })

    //         .catch((err)=>res.send({status:"fail",error:err,msg:"invalid email"}))
    // }

    hasValidUser: (req, res) => {
        const { email, pwd} = req.body;
        return userModel.hasValidUser(email,pwd)
        .then((data)=> {
          if(data.length === 1){
            res.send({status: "valid", type: data?.[0]?.type});
          }
          else{
            res.send({status: "invalid"});
          }
        })
      }
}