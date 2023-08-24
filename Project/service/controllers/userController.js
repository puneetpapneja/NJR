const userModel = require("../models/userModel");

module.exports = {
  create: (req, res) => {
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
      .getAll()
      .then((allUsers) => res.send(allUsers))
      .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
  },
  deleteById: (req, res) => {
    return userModel.deleteById(req.body.id).then((deletedUser) =>
      res
        .send(deletedUser)({
          status: "OK",
          msg: "User deleted successfully",
          deletedUser: deletedUser,
        })
        .catch((err) => res.send({ status: "fail", error: err }))
    );
  },
  update: (req, res) => {
    return userModel
      .update(req.body.id, req.body.fields)
      .then((updatedUser) =>
        res.send({
          status: "ok",
          msg: "User updated successfully.",
          updatedUser: updatedUser,
        })
      )
      .catch((err) => res.send({ status: "fail", error: err }));
  },
  hasValidUser: (req, res) => {
    const { email, pwd } = req.body;
    return userModel.hasValidUser(email, pwd).then((data) => {
      if (data.length === 1) {
        res.send({ status: "valid", type: data?.[0]?.type });
      } else {
        res.send({ status: "invalid" });
      }
    });
  },
};
