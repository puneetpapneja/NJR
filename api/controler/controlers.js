const Data=require('../model/dataModel')

exports.data=async(req,res)=>{
    const {videoNo,views,link}=req.body;
    const img=req.file.filename;
    try{
   const record= new Data({
        image:img,
    videoNo:videoNo,
    views:views,
    link:link
    })

    await record.save()
    // console.log(record)
    res.json(record)

}catch(error){
    console.log("error in data post api",error)
}
    

}

exports.getpostdata=async(req,res)=>{
    const record=await Data.find()
    res.json(record)
}