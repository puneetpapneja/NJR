const jobModels = require("../models/jobModels");

module.exports = {
  create: async (req, res) => {
    // console.log(req.body);
    try {
      const data = await jobModels.create(req.body);
      return res.send({
        status: "ok",
        msg: "job created successfully",
        data: data._id,
      });
    } catch (err) {
      return res.send({ status: "fail", err: err });
    }
  },
  getAll: async (req, res) => {
    try {
      const allJobs = await jobModels.getAll();
      return res.send(allJobs);
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  getById: async (req, res) => {
    try {
      const job = await jobModels.getById(req.body.id);
      return res.send(job);
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  deleteById: async (req, res) => {
    try {
      const deletedJob = await jobModels.deleteById(req.body.id);
      return res.send({ status: "deleted", deletedJob: deletedJob });
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  update: async (req, res) => {
    try {
      const updatedJob = await jobModels.update(req.body.id, req.body.fields);
      return res.send({ status: "Ok", updatedJob: updatedJob });
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  getByFilters: async (req, res) => {
    // console.log("request ",req.body);
    try {
      const data = await jobModels.getByFilters(req.body.search);
      return res.send(data);
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  getByEmail: async (req, res) => {
    try {
      const data = await jobModels.getByEmail(req.body.emailId);
      return res.send(data);
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  updateApplyers: async (req, res) => {
    try {
      await jobModels.updateApplyers(req.body.id, req.body.fields);
      return res.send({ status: "ok", msg: "successfully applied" });
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
  getAllForUser: async (req, res) => {
    try {
      const data = await jobModels.getAllForUser(req.body.id);
      return res.send(data);
    } catch (err) {
      return res.send({ status: "fail", error: err });
    }
  },
};
