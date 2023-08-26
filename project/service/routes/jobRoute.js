const express = require('express');
const router = express.Router();
const jobController=require('../Controller/jobController');
router.post('/create',jobController.create);
router.get('/find',jobController.getAll);
router.put('/update',jobController.update);
router.delete('/remove', jobController.deleteById);
router.get('/findspecified',jobController.getSpecified);
module.exports=router;