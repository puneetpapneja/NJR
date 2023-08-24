const mongoose = require("mongoose");
const userSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String

});


const userCollection=mongoose.model("users",userSchema);
module.exports={
    create:(fields)=>{
       const user=new userCollection(fields);
       return user.save();
    },
    getAll:()=>userCollection.find(),
    deleteById:(userid)=> userCollection.deleteOne({_id:userid}),
     update:(id,fields)=>userCollection.updateOne({_id:id},fields),  
     hasValidUser: (emailId, pwd) => {
        return userCollection.find({emailId: emailId, password: pwd});
      }
}
