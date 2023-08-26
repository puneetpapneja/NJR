const jobModel = require("../models/jobModel");
module.exports = {
  create: async (req, res) => {
    try {
      const data = await jobModel.create(req.body);
      return res.send({
        status: "ok",
        msg: "Job created successfully.",
        data: data,
      });
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  getAll: (req, res) => {
    return jobModel
      .getAll()
      .then((allJobs) => res.send(allJobs))
      .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
  },
  deleteById: async (req, res) => {
    try {
      const deletedJob = await jobModel.deleteById(req.body.id);
      return res.send({
        status: "OK",
        msg: "Job deleted successfully.",
        deletedJob: deletedJob,
      });
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },

  update: (req, res) => {
    return jobModel
      .update(req.body.id, req.body.fields)
      .then((updatedJob) =>
        res.send({
          status: "OK",
          msg: "Job updated successfully.",
          updatedJob: updatedJob,
        })
      )
      .catch((err) => res.send({ status: "fail", errro: err }));
  },
};
