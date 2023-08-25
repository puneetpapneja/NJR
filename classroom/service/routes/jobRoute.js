const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/create', jobController.create);
router.post('/deleteById', jobController.deleteById);
router.post('/getAll', jobController.getAll);
router.post('/update', jobController.update);

module.exports = router;