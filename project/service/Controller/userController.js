const userModel = require("../Module/userModel");

module.exports = {
  create: (req, res) => {
    //logic for entries goes here
    return userModel
      .create(req.body)

      .then((data) => {
        return res.send({
          status: "ok",
          msg: "User created successfully.",
          data: data,
        });
      })

      .catch((err) => {
        return res.send({ status: "fail", error: err });
      });
  },

  getAll: (req, res) => {
    return userModel
      .getALL()

      .then((users) => {
        return res.send(users);
      })

      .catch((err) => {
        return res.send({ status: "fail", error: err });
      });
  },

  deleteById: (req, res) => {
    return userModel
      .deleteById(req.body.id)

      .then((deletedUser) => {
        return res.send({ status: "deleted", deletedUser: deletedUser });
      })

      .catch((err) => {
        return res.send({ status: "failed", error: err });
      });
  },

  updateUser: (req, res) => {
    return userModel
      .updateUser(req.body.id, req.body.fields)

      .then((updatedUser) => {
        return res.send({ status: "updated", updatedUser: updatedUser });
      })

      .catch((err) => {
        return res.send({ status: "failed", error: err });
      });
  },

  loginuser: (req, res) => {
    return userModel.getuser(req.body.emailId)

    .then((userData) => {
      // console.log("Controller");
      if(userData){
        // console.log(userData)
        if(userData.password === req.body.password) return res.send({status:"ok", msg:"Login successful"})
        else return res.send({status:"fail", msg:"Incorrect Password", error:"Login fail"})
      }
      else res.send({status:"fail", msg:"user not exist", error:"Login fail"})
    })

    .catch((err) => {
      return res.send({ status: "failed", error: err });
    })
  }
};
