const express = require("express");
const router = express.Router();
const jobController = require('../controller/jobController');

router.post('/create', jobController.create);

module.exports = router;
