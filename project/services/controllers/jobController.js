const jobModels = require("../models/jobModels");

module.exports = {
  create: (req, res) => {
    return jobModels
      .create(req.body)
      .then((data) => {
        return res.send({
          status: "ok",
          msg: "job created successfully.",
          data: data,
        });
      })
      .catch((err) => {
        return res.send({ status: "fail", error: err });
      });
  },
  getAll: (req, res) => {
    return jobModels
      .getAll(req.body)
      .then((alljobs) => res.send(alljobs))
      .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
  },
  deleteById: (req, res) => {
    return jobModels
      .deleteById(req.body.id)
      .then((deletedjob) =>
        res.send({
          status: "OK",
          msg: "job deleted successfully.",
          deletedjob: deletedjob,
        })
      )
      .catch((err) => res.send({ status: "fail", errro: err }));
  },
  update: (req, res) => {
    return userModel
      .update(req.body.id, req.body.fields)
      .then((updatedjob) =>
        res.send({
          status: "OK",
          msg: "jobs updated successfully.",
          updatedjob: updatedjob,
        })
      )
      .catch((err) => res.send({ status: "fail", errro: err }));
  },
};
