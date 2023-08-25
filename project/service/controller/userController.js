const userModel=require("../models/userModel");

module.exports={
    create:(req,res)=>{
           return userModel.create(req.body)
           .then((data)=>{
             return  res.send({status:"ok" ,msg:"user created successfully", data:data})
           })
           .catch((err)=>{
            return res.send({status:"fail", error:err});
           })
    },

    getAll:(req,res)=>{
            return userModel.getAll()
            .then((alluser)=>{
               return  res.send(alluser)
            })
            .catch((err)=>{
              return   res.send({status:"fail", error:err})
            })
    },
    deleteById:(req,res)=>{
        return userModel.deleteById(req.body.id)
        .then((deleteuser)=>{
          return   res.end({status:"ok" ,msg:"user deleted successfully", data:data})
        })
        .catch((err)=>{
           return res.send({status:"fail", error:err});
        })
    },

    update:(req,res)=>{
return userModel.update(req.body.id,req.body.field)
.then((updatedUser) =>  res.send({status: "OK", msg: "User updated successfully.", updatedUser: updatedUser}))
.catch((err)=> res.send({status:"fail", errro: err}));
    },

    hasvalidUser: (req, res) => {
      const { email, pwd} = req.body;
      return userModel.hasvalidUser(email,pwd)
      .then((data)=> {
        if(data.length === 1){     // if only and only one user exist in our db then this condition will work
          res.send({status: "valid", type: data?.[0]?.type});
        }
        else{
          res.send({status: "invalid"});
        }
      })
    }
}