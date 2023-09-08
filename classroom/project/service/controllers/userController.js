const userModels = require("../models/userModels");

module.exports = {
  create: (req, res) => {
    return userModels
      .create(req.body)
      .then((data) => {
        return res.send({
          status: "ok",
          msg: "user created successfully",
          data: data,
        });
      })
      .catch((err) => res.send({ status: "fail", err: err }));
  },
  getAll: (req, res) => {
    return userModels
      .getAll()
      .then((allUser) => res.send(allUser))
      .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
  },
  deleteById: (req, res) => {
    return userModels
      .deleteById(req.body.id)
      .then((deletedUser) =>
        res.send({
          status: "Ok",
          msg: "user deleted",
          deletedUser: deletedUser,
        })
      )
      .catch((err) => res.send({ status: "fail", error: err }));
  },
  update: (req, res) => {
    // console.log("userController", req.file.path);
    // console.log("RequestBody", req.body.id);
    // Check if a file was uploaded
    if (req.file) {
      // If a file was uploaded, update the 'fileCV' field with the file path
      req.body.fileCV = req.file.path;
    }
    // console.log("RequestBodywithfilepath \n", req.body);
    const id = req.body.id;
    const fields = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      Resume: req.body.fileCV,
      emailId: req.body.emailId,
    };
    return userModels
      .update(id, fields)
      .then((updatedUser) =>
        res.send({
          status: "OK",
          msg: "User updated successfully.",
          updatedUser: updatedUser,
        })
      )
      .catch((err) => res.send({ status: "fail", error: err }));
  },
  loginValidation: (req, res) => {
    const { emailId, password } = req.body;
    return userModels.getUser(emailId, password).then((data) => {
      if (data.length === 1) {
        res.send({
          status: "valid",
          type: data?.[0]?.type,
          firstName: data?.[0]?.firstName || "",
          lastName: data?.[0]?.lastName || "",
          emailId: data?.[0]?.emailId,
          _id: data?.[0]?._id,
          companyName: data?.[0]?.companyName || "",
        });
      } else {
        res.send({ status: "invalid" });
      }
    });
  },
};
