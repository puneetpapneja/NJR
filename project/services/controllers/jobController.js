// const jobModel = require("../models/jobModel");
// module.exports = {
//   create: (req, res) => {
//     //logic for validation
//     return jobModel.create(req.body).then((data) => {
//       return res
//         .send({
//           status: "ok",
//           msg: "Job created successfully.",
//           data: data,
//         })
//         .catch((err) => {
//           return res.send({ status: "fail", error: err });
//         });
//     });
//   },
//   getAll: (req, res) => {
//     return jobModel
//       .getAll()
//       .then((allJobs) => res.send(allJobs))
//       .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
//   },
//   deleteById: (req, res) => {
//     return jobModel
//       .deleteById(req.body.id)
//       .then((deletedJob) =>
//         res.send({
//           status: "OK",
//           msg: "Job deleted successfully.",
//           deletedJob: deletedJob,
//         })
//       )
//       .catch((err) => res.send({ status: "fail", errro: err }));
//   },
//   update: (req, res) => {
//     return jobModel
//       .update(req.body.id, req.body.fields)
//       .then((updatedJob) =>
//         res.send({
//           status: "OK",
//           msg: "Job updated successfully.",
//           updatedJob: updatedJob,
//         })
//       )
//       .catch((err) => res.send({ status: "fail", errro: err }));
//   },
// };

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
