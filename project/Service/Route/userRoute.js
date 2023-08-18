const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.post('/create', userController.create);

module.exports = router;
