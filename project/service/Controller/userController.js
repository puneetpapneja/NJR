const userModel = require('../Module/userModel')

module.exports = {
    create: (req,res)=>{
        //logic for entries goes here
        return userModel.create(req.body, res)
    }
}