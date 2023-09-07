const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  type: String,
  companyName: String,
  resumeImg: String,
  postedJobs: [
    {
      jobId: Number,
      jobTitle: String,
      jobDescription: String,
      maxSalary: Number,
      recruiterData: {
        emailId: String,
        firstName: String,
        lastName: String,
      
      },
    },
  ],
  appliedJobs: [
    {
      jobId: Number,
      jobTitle: String,
      jobDescription: String,
      maxSalary: Number,
      recruiterData: {
        emailId: String,
        firstName: String,
        lastName: String,
        
      },
    },
  ],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
