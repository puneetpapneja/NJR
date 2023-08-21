const express = require("express");
const jobController = require("../controllers/jobcontroller");

const router = express.Router();

router.post("/post", jobController.postJob);

module.exports = router;