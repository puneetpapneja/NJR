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
};
