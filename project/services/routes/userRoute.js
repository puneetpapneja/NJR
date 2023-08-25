const express =require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/create', userController.create);
router.get('/getAll',userController.getAll);
router.delete('/deleteById',userController.deleteById);
router.put('/update',userController.update);
router.post('/hasValidUser', userController.hasValidUser);

module.exports =router;