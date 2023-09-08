const express = require("express");
const userController = require("../controllers/userController");
const jobController = require("../controllers/jobController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("file", file);
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.post("/create", userController.create);
router.get("/getAll", userController.getAll);
router.post("/update", upload.single("fileCV"), userController.update);
router.delete("/deleteById", userController.deleteById);
router.post("/loginValidation", userController.loginValidation);
//jobcontroller as jobs are to be accessed
router.post("/getAllForUser", jobController.getAllForUser);
module.exports = router;
