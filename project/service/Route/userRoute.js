const express = require('express')

const routes = express.Router();

const userController = require('../Controller/userController');

routes.post('/create',userController.create);

module.exports = routes