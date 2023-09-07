const Job = require("./../models/postAjobModel");
// const { updateUser } = require("./userController");

exports.getAllJob = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({
      length: jobs.length,
      dataObj: {
        data: jobs,
      },
    });
  } catch (err) {
    res.send({
      status: failed,
      message: err.message,
      data: {
        data: err,
      },
    });
  }
};

exports.getJob = async (req, res) => {
  try {
    // Job.
    let job = await Job.findById(req.body.id);
    if (!job) return new Error("Job not found");
    res.status(200).json({
      status: "success",
      data: {
        data: job,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

exports.createJob = async (req, res) => {
  const newJob = await Job.create(req.body);
  res.status(201).json({
    status: "success",
    data: newJob,
  });
};

exports.updateJob = async (req, res) => {
  console.log(req.body);
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.body.id,
      req.body.fields
    );
    if (!updatedJob) return new Error("No Job find with that id");
    res.status(200).json({
      status: "success",
      data: updatedJob,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
      error: err,
    });
  }
};

exports.deleteJobById = async (req, res) => {
  console.log(req.body);
  try {
    const deletedJob = await Job.deleteOne(req.body);
    if (!deletedJob) return new Error("No Job find with that id");
    res.status(200).json({
      status: "user deletd successfully",
      data: deletedJob,
    });
  } catch (err) {
    res.status(500).json({
      status: err.message,
      error: err,
    });
  }
};

exports.heyUser = function (req, res) {
  res.send({ status: "hello from postJob" });
};

exports.SearchJob = async (req, res) => {
  try {
    // updatedUser = req.body;

    const regex = new RegExp(`.*${req.body.field}.*`);
    console.log(regex);
    const x = await Job.find({
      $or: [
        { jobTitle: { $regex: regex } },
        { jobDescription: { $regex: regex } },
        { companyName: { $regex: regex } },
      ],
    });
    console.log(x);
    res.status(200).json({
      statusbar: "job search successful",
      // data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: req.body.oldData,
    });
  }
};

///////////////////////////////////////////

exports.setEmailId = async (req, res) => {
  // console.log(req.body._id);
  const newJobUser = await Job.create(req.body);
  res.status(201).json({
    status: "Email Id is set",
    data: newJobUser,
  });
};

exports.updateJobUserPersonalData = async (req, res) => {
  try {
    // const updatededJobUser = await Job.findOne(req.body.email);
    console.log(req.body);
    const user = await Job.findById(req.body._id);
    user.recruiterData = req.body.recruiterData;
    console.log(user);
    res.status(200).json({
      status: "jobUser updated",
      data: user,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      data: req.body.email,
    });
  }
};

exports.updateJobUserJobData = async (req, res) => {
  try {
    let updatedUser = await Job.updateOne(req.body);
    console.log(updatedUser);
    // updatedUser = req.body;
    res.status(200).json({
      statusbar: "jobUser fully updated",
      // data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: req.body.oldData,
    });
  }
};
