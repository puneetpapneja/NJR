const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/create', userController.create);
router.get('/getAll', userController.getAll);
router.delete('/:id', userController.deleteById);
router.put('/update', userController.update);

module.exports = router;
