const express = require('express');
const router = express.Router();
const jobController = require("../controllers/jobcontroller");

router.post('/create', jobController.create);
router.get('/getAll', jobController.getAll);

module.exports = router;
