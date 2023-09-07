const User = require("../models/userModel");
const multer=require('multer');

const multerStorage=multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"public/images/users")
  },
  
  filename:(req,file,cb)=>{
    const ext=file.mimetype.split('/')[1]
    cb(null,`user-${Date.now()}.${ext}`)
  }
})




const upload=multer({
  storage:multerStorage,

})



exports.uploadResume=upload.single("resumeImg") 



exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      length: users.length,
      data: users,
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

exports.getUser = async (req, res) => {
  try {
    let user = await User.findOne(req.body, { _id: 0, password: 0 });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.getValidatedUser = async (req, res) => {
  try {
    // console.log(req.body);
    let validUser = await User.findOne(req.body, { _id: 0 });
    // console.log(validUser);
    if (
      validUser &&
      req.body.emailId === validUser.emailId &&
      req.body.password === validUser.password
    ) {
      validUser = {
        emailId: validUser.emailId,
        type: validUser.type,
        companyName: validUser.companyName,
        firstName: validUser.firstName,
        lastName: validUser.lastName,
      };

      res.status(200).json({
        status: "validUser",
        data: validUser,
      });
    } else {
      res.status(404).json({
        status: "inValidUser",
      });
    }

    // res.status(201).json({
    //   status: "success,new job posted",
    // });
  } catch (err) {}
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success,new job posted",
    data: {
      data: newUser,
    },
  });
};

exports.updateUser = async (req, res) => {
  // console.log(req.body);
  try {
    

    const updatedUser = await User.findByIdAndUpdate(
      req.body.id,
      req.body.fields
    );
    if (!updatedUser) return new Error("No Job find with that id");
    res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
      error: err,
    });
  }
};

exports.updateProfileDetails=async (req,res)=>{
  try {
    if(req.file){
      console.log(req)
      const updatedUser = await User.findOneAndUpdate(
        {emailId:req.body.emailId},
        {
          resumeImg:req.file.filename,
          firstName:req.body.firstName,
          lastName:req.body.lastName,
        }
      );
      if (!updatedUser) return new Error("No Job find with that id");
      res.status(200).json({
        status: "success",
        data: updatedUser,
      });
    }
    
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
      error: err,
    });
  }
  
  
}

exports.deleteJobById = async (req, res) => {
  console.log(req.body);
  try {
    const deletedUser = await Job.findByIdAndDelete(req.body.id);
    if (!deletedUser) return new Error("No Job find with that id");
    res.status(200).json({
      status: "user deletd successfully",
      data: deletedUser,
    });
  } catch (err) {
    res.status(500).json({
      status: err.message,
      error: err,
    });
  }
};

exports.addPostedJobs = async (req, res) => {
  // console.log(req.body.emailId);
  try {
    const x = await User.findOneAndUpdate(
      { emailId: req.body.emailId },
      { $push: { postedJobs: req.body.fields } }
    );

    // const x = await User.updateOne(req.body.emailId, {
    // $push: { postedJobs: req.body.fields.field },
    // });
    console.log(x);
    if (!x) return new Error("No updates");
    res.status(200).json({
      status: "success",
      // data: x,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
};

exports.deletePostedJobs = async (req, res) => {
  // console.log(req.body.emailId);
  try {
    const x = await User.findOneAndUpdate(
      { emailId: req.body.emailId },
      { $pull: { postedJobs: req.body.fields } }
    );

    // const x = await User.updateOne(req.body.emailId, {
    // $push: { postedJobs: req.body.fields.field },
    // });
    console.log(x);
    if (!x) return new Error("No updates");
    res.status(200).json({
      status: "success",
      // data: x,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
};

exports.updatePostedJobs = async (req, res) => {
  // console.log(req.body.emailId);
  try {
    // const id = req.body.id;
    let x = await User.findOneAndUpdate(
      { emailId: req.body.emailId },
      { $set: { postedJobs: req.body.fields } }
    );

    // x = await User.findOneAndUpdate(
    //   { emailId: req.body.emailId },
    //   {
    //     $push: { postedJobs: req.body.fields },
    //   }
    // );

    // const x = await User.updateOne(req.body.emailId, {
    // $push: { postedJobs: req.body.fields.field },
    // });
    console.log(x);
    if (!x) return new Error("No updates");
    res.status(200).json({
      status: "success",
      // data: x,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
};

exports.addAppliedJobs = async (req, res) => {
  // console.log(req.body.emailId);
  try {
    const x = await User.findOneAndUpdate(
      { emailId: req.body.emailId },
      { $push: { appliedJobs: req.body.fields } }
    );

    // const x = await User.updateOne(req.body.emailId, {
    // $push: { postedJobs: req.body.fields.field },
    // });
    console.log(x);
    if (!x) return new Error("No updates");
    res.status(200).json({
      status: "success",
      // data: x,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
};

exports.deleteAppliedJobs = async (req, res) => {
  // console.log(req.body.emailId);
  try {
    const x = await User.findOneAndUpdate(
      { emailId: req.body.emailId },
      { $pull: { appliedJobs: req.body.fields } }
    );

    // const x = await User.updateOne(req.body.emailId, {
    // $push: { postedJobs: req.body.fields.field },
    // });
    console.log(x);
    if (!x) return new Error("No updates");
    res.status(200).json({
      status: "success",
      // data: x,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
};

exports.updateAppliedJobs = async (req, res) => {
  // console.log(req.body.emailId);
  try {
    let x = await User.findOneAndUpdate(
      { emailId: req.body.emailId },
      {
        $set: { appliedJobs: req.body.fields },
      }
    );
    // x = await User.findOneAndUpdate(
    //   { emailId: req.body.emailId },
    //   {
    //     $push: { postedJobs: req.body.fields },
    //   }
    // );

    // const x = await User.updateOne(req.body.emailId, {
    // $push: { postedJobs: req.body.fields.field },
    // });
    console.log(x);
    if (!x) return new Error("No updates");
    res.status(200).json({
      status: "success",
      // data: x,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
};
