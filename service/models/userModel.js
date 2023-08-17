const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: String,  
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String
});

const userCollection = mongoose.model("users",userSchema);

module.exports = {
    create: (fields, res)=>{
        const user = new userCollection(fields);
        return user.save()
    }
}