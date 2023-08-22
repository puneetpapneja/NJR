const jobModel = require("../models/jobsModel");
// const { validationResult } = require('express-validator');

module.exports = {
  create: async (req, res) => {
    try {
      const createdJob = await jobModel.create(req.body);
      return res.status(201).send({
        status: "ok",
        msg: "Job created successfully.",
        data: createdJob,
      });
    } catch (error) {
      return res.status(500).send({ status: "fail", error: error.message });
    }
  },
  getAll: (req, res) => {
    return jobModel
      .getAll()
      .then((alljobs) => res.send(alljobs))
      .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
  },
  deleteById: (req, res) => {
    return jobModel
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
    return jobModel
      .update(req.body.id, req.body.fields)
      .then((updatedjob) =>
        res.send({
          status: "OK",
          msg: "job updated successfully.",
          updatedjob: updatedjob,
        })
      )
      .catch((err) => res.send({ status: "fail", errro: err }));
  },
};