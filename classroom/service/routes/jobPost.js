const express= require("express")
const jobController=require("./../controllers/jobController");



const Router = express.Router();

Router.route("/postJob").post(jobController.createJob).get(jobController.heyUser);

module.exports =Router;