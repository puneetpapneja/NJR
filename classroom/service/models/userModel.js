const mongoose = require("mongoose");   /// proccess number 6 full page

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String
});

const userCollection = mongoose.model("users", userSchema);

module.exports = {
    create: (fields, res)=>{
        const user = new userCollection(fields);
        return user.save()
        .then((data) => {
            return res.send({status: "ok", msg:"User created successfully."})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        })
    }
}
