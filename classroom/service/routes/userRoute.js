const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.create);
<<<<<<< HEAD
=======
router.get('/getAll', userController.getAll);
router.delete('/deleteById', userController.deleteById);
router.put('/update', userController.update);
>>>>>>> f6fdee607ee834fb54767274235141ee37b3db11

module.exports = router;
