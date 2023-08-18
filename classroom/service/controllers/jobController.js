const jobPost=require("./../models/postAjobModel")
exports.createJob=async (req,res)=>{
    const newJob=await jobPost.create(req.body);
    res.status(201).json({
        status:"success,new job posted",
        data:{
            data:newJob
        }
    })
}


exports.heyUser=function (req, res)  {
    res.send({status: "hello from postJob"});
}