const jobModel = require('../Module/jobModule')

module.exports = {
    create: (req,res)=>{
        return jobModel.create(req.body, res)
        .then((data) => {
            return res.send({status:"ok", msg:"job created succesfully",data:data})
        })

        .catch((err) => {
            return res.send({status:"Fail", msg:"Error occur"})
        })
    },

    getAll: (req, res) => {
        return jobModel
          .getALL()
    
          .then((users) => {
            return res.send({ status: "ok" }, users);
          })
    
          .catch((err) => {
            return res.send({ status: "fail", error: err });
          });
      },
    
      deleteById: (req, res) => {
        return jobModel
          .deleteById(req.body.id)
    
          .then((deleteJob) => {
            return res.send({ status: "deleted", deleteJob: deleteJob });
          })
    
          .catch((err) => {
            return res.send({ status: "failed", error: err });
          });
      },
    
      updateUser: (req, res) => {
        return jobModel
          .updateUser(req.body.id, req.body.fields)
    
          .then((updatedUser) => {
            return res.send({ status: "updated", updatedUser: updatedUser });
          })
    
          .catch((err) => {
            return res.send({ status: "failed", error: err });
          });
      },
}