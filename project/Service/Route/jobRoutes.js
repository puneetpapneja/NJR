const express = require('express');
const router = express.Router();
const jobController=require('../Controller/jobController');
router.post('/create',jobController.create);
module.exports=router;