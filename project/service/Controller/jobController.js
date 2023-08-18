const jobModel = require('../Module/jobModule')

module.exports = {
    create: (req,res)=>{
        return jobModel.create(req.body, res)
    }
}