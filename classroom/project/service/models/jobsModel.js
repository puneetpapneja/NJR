const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  type: String,
  companyName: String,
});

const jobCollection = mongoose.model("jobs", jobSchema);

module.exports = {
  create: async (fields) => {
    try {
      const job = new jobCollection(fields);
      const createdJob = await job.save();
      return createdJob;
    } catch (error) {
      throw error; // Rethrow the error for higher-level error handling
    }
  },
  getAll: () => jobCollection.find(),
  deleteById: (id) => jobCollection.deleteOne({ _id: id }),
  update: (id, fields) => jobCollection.updateOne({ _id: id }, fields),
};
