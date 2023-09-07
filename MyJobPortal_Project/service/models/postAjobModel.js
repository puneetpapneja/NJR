const mongoose = require("mongoose");

const postJobSchema = mongoose.Schema({
  jobId: Number,
  jobTitle: String,
  jobDescription: String,
  maxSalary: Number,
  companyName: String,
  createdAt:{
    type:Date,
    default:Date.now()
  },
  recruiterData: {
    emailId: String,
    firstName: String,
    lastName: String,
  },
});

const postJobModel = mongoose.model("postAjob", postJobSchema);

module.exports = postJobModel;
