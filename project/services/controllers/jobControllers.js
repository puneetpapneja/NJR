const jobModel = require('../models/jobModel');

module.exports={
    create:(req,res)=>{

        return jobModel.create(req.body,res);
    }
}