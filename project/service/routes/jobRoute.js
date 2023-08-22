const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobController');

router.post('/create', JobController.create);
router.get('/getAll', JobController.getAll);
router.delete('/deleteById', JobController.deleteById);
router.put('/update', JobController.update);

module.exports = router;