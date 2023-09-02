const mongoose = require("mongoose");
const multer= require('multer');
const upload=multer();
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String,
    CV: String,
    applied_jobs:[{
        _id:String,
        job_title:String,
        description:String,
        "recruiter_dtls.emailId": String
    }]
});

const userCollection = mongoose.model("users", userSchema);

module.exports = {
    create: (fields)=>{
        const user = new userCollection(fields);
        return user.save()      
    },
    getAll: ()=> userCollection.find(),
    deleteById: (id) => userCollection.deleteOne({_id: id}),
    update: (id, fields) => userCollection.updateOne({_id: id}, fields),
    hasValidUser: (email, pwd)=>{
        return userCollection.find({emailId:email, password: pwd});
    },
    appliedjobs: (id,fields)=>{
        return userCollection.updateOne({_id:id},{$push:{applied_jobs:fields}});
    },
    showapplied:(id)=>{
         // console.log(id);
        return userCollection.findOne({_id:id});
    }
}
