const express = require('express')

const routes = express.Router();

const jobController = require('../Controller/jobController')

routes.post('/create',jobController.create)

module.exports = routes