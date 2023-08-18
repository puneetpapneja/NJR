const express =require('express');
const router = express.Router();
const jobController = require('../controllers/jobControllers');

router.post('/Create', jobController.create);
module.exports = router;