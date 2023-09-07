const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");



router
  .get("/getUsers", userController.getAllUsers)
  .post("/getUser", userController.getUser)
  .post("/postUser", userController.createUser)
  .put("/updateUser",userController.updateUser)
  .put("/updateProfileDetails",userController.uploadResume,userController.updateProfileDetails)
  .delete("/deleteUser", userController.deleteJobById)
  .post("/getValidateduser", userController.getValidatedUser)
  .put("/addUserPostedJobs", userController.addPostedJobs)
  .put("/deleteUserPostedJobs", userController.deletePostedJobs)
  .put("/updateUserPostedJobs", userController.updatePostedJobs)
  .put("/addUserAppliedJobs", userController.addAppliedJobs)
  .put("/deleteUserAppliedJobs", userController.deleteAppliedJobs)
  .put("/updateUserAppliedJobs", userController.updateAppliedJobs);

module.exports = router;
