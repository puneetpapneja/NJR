const userModel = require('../Model/userModel');
module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return userModel.create(req.body, res);
    }
}