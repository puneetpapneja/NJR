const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: String,
  description: String,
  maxSalary: Number,
});

const jobCollection = mongoose.model("jobs", jobSchema);

module.exports = {
  create: async (fields) => {
    try {
      const job = new jobCollection(fields);
      const createdJob = await job.save();
      return createdJob;
    } catch (error) {
      throw error;
    }
  },
  getAll: () => jobCollection.find(),
  deleteById: (id) => jobCollection.deleteOne({ _id: id }),
  update: (id, fields) => jobCollection.updateOne({ _id: id }, fields),
};
