const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/create',jobController.create);
router.get('/getAll', jobController.getAll);
router.delete('/deleteById', jobController.deleteById);
router.put('/update', jobController.update);
router.get('/findspecified',jobController.getSpecified);
module.exports = router;