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

module.exports = {
  create: (fields) => {
    const job = new jobCollection(fields);
    return job.save();
  },
  getAll: () => jobCollection.find(),
  deleteById: (jobid) => jobCollection.deleteOne({ _id: jobid }),
  update: (id, fields) => jobCollection.updateOne({ _id: id }, fields),
};
