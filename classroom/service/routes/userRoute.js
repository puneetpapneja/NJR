const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.create);
router.get('/getAll', userController.getAll);
router.delete('/:id', jobController.deleteById);
router.put('/update', userController.update);

module.exports = router;
