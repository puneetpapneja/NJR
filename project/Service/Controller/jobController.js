const jobModel = require('../Model/jobModel');
module.exports={
    create: (req,res)=>{
        return jobModel.create(req.body,res);
    }
}