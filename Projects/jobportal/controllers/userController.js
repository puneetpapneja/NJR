const userModel=require('../models/userModel');

module.exports={
    create:(req, res)=>{
        return userModel.create(req.body, res);
    }
}