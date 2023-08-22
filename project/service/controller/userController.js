const userModel=require('../models/userModel');

module.exports={
    create:(req,res)=>{
        // Logics aree written here
        return userModel.create(req.body)

        .then((data)=>{
            return res.send({satus:"ok",msg:"User created successfully!!",data:data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    getAll:(req,res)=>{
        return userModel.getAll()

        .then((allUsers)=>{
            return res.send(allUsers)
        })
        .catch((err)=>{
            return res.send({status:"failed",error:err})
        });
    },
    deleteById:(req,res)=>{
        return userModel.deleteById(req.body.id)

        .then((deletedUser)=>{
            return res.send({msg:"user deleted",deletedUser:deletedUser})
        })
        .catch((err)=>{
            return res.send({status:"failed",error:err})
        });
    },
    update:(req,res)=>{
        return userModel.update(req.body.id,req.body.fields)

        .then((updatedUser)=>{
            return res.send({status:"ok",msg:"user updated",updatedUser:updatedUser})
        })
        .catch((err)=>{
            return res.send({status:"failed",error:err})
        });
    }
    
}


