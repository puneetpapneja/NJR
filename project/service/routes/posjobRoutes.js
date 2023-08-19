const express = require('express');
const router = express.Router();
const jobController=require('../controllers/posjobController');


router.post('/create',jobController.create);
module.exports=router;