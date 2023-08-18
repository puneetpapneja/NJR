const Job = require("../models/jobmodel");

exports.postJob = async (req, res) => {
  try {
    const { title, description, maxSalary } = req.body;
    const newJob = new Job({
      title,
      description,
      maxSalary,
    });
    await newJob.save();
    res.status(201).json({ message: "Job posted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
