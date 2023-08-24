const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  jobTitle: String,
  jobDescription: String,
  maxSalary: String,
  companyName: String,
  recuriterDtl: {
    name: String,
    emailId: String,
    contactNo: String,
  },
});

const jobCollection = mongoose.model("jobs", jobSchema);
module.exports = jobCollection;
