const express = require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.post('/create', userController.create);
router.get('/getAll', userController.getAll);
router.delete('/deletebyId', userController.deletebyId);
router.put('/update', userController.update);

module.exports=router;