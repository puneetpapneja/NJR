const userModel = require('../models/userModel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        
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
  },
  loginValidation:(req,res)=>{
      userModel.getByEmail(req.body.email).then((userData)=>{
          let flag=0;
          userData.map((userdata)=>{
          if(req.body.password===userdata.password){
              flag=1;
              return res.send({status:"Ok",msg:"login successfull"});}
          })
          if (!flag) res.send({status:"fail",msg:"invalid password"})
      })
    userModel.getbyName(req.bod.firstName).then((userData)=>{
        
    })
          .catch((err)=>res.send({status:"fail",error:err,msg:"invalid email"}))
  }  }
    

