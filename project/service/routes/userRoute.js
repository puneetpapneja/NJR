/*const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.create);
router.get('/getAll', userController.getAll);
router.delete('/deleteById', userController.deleteById);
router.put('/update', userController.update);

module.exports = router;*/
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.create);

router.get('/getAll', userController.getAll);

router.get('/:id', userController.getById);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports ={
     router};
