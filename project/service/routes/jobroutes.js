const express = require("express");
const router = express.Router();
const jobContoller = require("../controllers/jobController");

router.post("/create", jobContoller.create);
router.get("/getAll", jobContoller.getAll);
router.delete("/deleteById", jobContoller.deleteById);
router.put("/update", jobContoller.update);

module.exports = router;