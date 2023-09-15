const express = require('express')
const jobController = require("../controllers/jobController");
const jobModels = require("../models/jobModel");
const router = express.Router();
router.post("/create",jobController.create);
router.get('/getAll',jobController.getAll);
router.get('/getById',jobController.getById);
router.put('/update',jobController.update);
router.delete('/deleteById',jobController.deleteById);
module.exports = router;