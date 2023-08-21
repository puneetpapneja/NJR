const userModel = require('../models/userModel'); // process mumber 7

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return userModel.create(req.body, res);
    }
}