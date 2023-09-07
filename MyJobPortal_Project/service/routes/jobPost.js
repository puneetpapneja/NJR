const express = require("express");
const jobController = require("./../controllers/jobController");

const Router = express.Router();

Router.post("/postJob", jobController.createJob)
  .get("/getJobs", jobController.getAllJob)
  .put("/updateJob", jobController.updateJob)
  .delete("/deleteJob", jobController.deleteJobById)
  .get("/getJob", jobController.getJob)
  .post("/setEmailId", jobController.setEmailId)
  .patch("/updateNames", jobController.updateJobUserPersonalData)
  .put("/updateJobData", jobController.updateJobUserJobData)
  .get("/searchJob", jobController.SearchJob);

module.exports = Router;
