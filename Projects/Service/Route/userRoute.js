const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.post('/create', userController.create);
router.get('/getAll', userController.getAll);
router.delete('/deleteById', userController.deleteById);
router.put('/update', userController.update);
// router.post('/find',userController.loginValidation);
router.post('/validateUser', userController.hasValidUser);
module.exports = router;
