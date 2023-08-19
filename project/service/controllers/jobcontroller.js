const Job = require("../models/jobmodel");

exports.create = async (req, res) => {
  try {
    // Extract job data from the request body
    const { title, description, maxSalary } = req.body;
    
    // Create a new job using the extracted data
    const newJob = new Job({
      title,
      description,
      maxSalary,
    });

    // Save the new job to the database
    await newJob.save();

    // Respond with a success message
    res.status(201).json({ message: "Job created successfully" });
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getAll = async (req, res) => {
  try {
    // Retrieve all jobs from the database
    const jobs = await Job.find();
    
    // Respond with the list of jobs
    res.status(200).json(jobs);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.deleteById = async (req, res) => {
  try {
    // Extract job ID from the request body
    const { id } = req.body;

    // Delete the job with the specified ID
    await Job.findByIdAndDelete(id);

    // Respond with a success message
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.update = async (req, res) => {
  try {
    // Extract job data from the request body
    const { id, title, description, maxSalary } = req.body;

    // Update the job with the specified ID
    await Job.findByIdAndUpdate(id, {
      title,
      description,
      maxSalary,
    });

    // Respond with a success message
    res.status(200).json({ message: "Job updated successfully" });
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
};
