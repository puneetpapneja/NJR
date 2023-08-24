const express = require('express')

const routes = express.Router();

const userController = require('../Controller/userController');

routes.post('/create',userController.create);
routes.get('/getall',userController.getAll);
routes.delete('/deleteById',userController.deleteById);
routes.put('/update',userController.updateUser);
routes.post('/login',userController.loginuser);

module.exports = routes