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
    },
    loginValidation:(req,res)=>{
        userModels.getByEmail(req.body.email).then((userData)=>{
            let flag=0;
            userData.map((userdata)=>{
            if(req.body.password===userdata.password){
                flag=1;
                return res.send({status:"Ok",msg:"login successfull"});}
            })
            if (!flag) res.send({status:"fail",msg:"invalid password"})
        })

            .catch((err)=>res.send({status:"fail",error:err,msg:"invalid email"}))
    }
}