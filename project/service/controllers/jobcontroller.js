const Job = require("../models/jobmodel");

exports.create = async (req, res) => {
  try {
    const { title, description, maxSalary } = req.body;
    
    const newJob = new Job({
      title,
      description,
      maxSalary,
    });

    
    await newJob.save();

    
    res.status(201).json({ message: "Job created successfully" });
  } catch (error) {
    
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const jobs = await Job.find();
    
    res.status(200).json(jobs);
  } catch (error) {
    
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const { id } = req.body;

    await Job.findByIdAndDelete(id);

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.update = async (req, res) => {
  try {
    
    const { id, title, description, maxSalary } = req.body;

    await Job.findByIdAndUpdate(id, {
      title,
      description,
      maxSalary,
    });

    
    res.status(200).json({ message: "Job updated successfully" });
  } catch (error) {
    
    res.status(500).json({ error: "An error occurred" });
  }
};
