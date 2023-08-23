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
      .then((allusers) => res.send(allusers))
      .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
  },
  deleteById: (req, res) => {
    return userModel
      .deleteById(req.body.id)
      .then((deleteduser) =>
        res.send({
          status: "OK",
          msg: "user deleted successfully.",
          deleteduser: deleteduser,
        })
      )
      .catch((err) => res.send({ status: "fail", errro: err }));
  },
  update: (req, res) => {
    return userModel
      .update(req.body.id, req.body.fields)
      .then((updateduser) =>
        res.send({
          status: "OK",
          msg: "user updated successfully.",
          updateduser: updateduser,
        })
      )
      .catch((err) => res.send({ status: "fail", errro: err }));
  },
};
