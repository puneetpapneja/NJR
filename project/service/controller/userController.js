const userModel=require("../models/userModel");

module.exports={
    create: async(req,res)=>{
      const checkuser=await userModel.find(req.body.emailId)
          if(checkuser.length=== 0){
            console.log("inside create controller");
           return userModel.create(req.body)
           .then((data)=>{
            return  res.send({status:"ok" ,msg:"user created successfully", data:data})
          })
          .catch((err)=>{
           return res.send({status:"fail", error:err});
          })
            
          }
          else{
            console.log("inside already exist");
            return res.send( { msg:"already exist"});
          }   
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
      console.log(req.body.emailId)
      console.log(req.body)
return userModel.update(req.body.emailId,req.body)
.then((updatedUser) =>  res.send({status: "OK", msg: "User updated successfully.", updatedUser: updatedUser}))
.catch((err)=> res.send({status:"fail", errro: err}));
    },

    hasvalidUser: (req, res) => {
      const { email, pwd} = req.body;
      return userModel.hasvalidUser(email,pwd)
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