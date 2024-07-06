const mongoose=require('mongoose')

const mongoSchema=mongoose.Schema({
    imageUrl:String,
    videoNo:String,
    views:Number,
    link:String
})


module.exports = mongoose.model('postData',mongoSchema)