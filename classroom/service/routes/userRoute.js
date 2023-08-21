const express = require('express');
const router = express.Router();
//this 2 process for 3

const userController = require('../controllers/userController'); // process number 8
     
// procces number 4
router.post('/create', userController.create);   
                       // process number 9
module.exports = router;
