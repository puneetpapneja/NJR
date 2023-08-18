const userModel=require('../models/userModel');

module.exports={
    create:(req,res)=>{
        // Logics aree written here
        return userModel.create(req.body,res);
    }
    
}


