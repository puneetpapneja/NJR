const mongoose = require("mongoose");

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
<<<<<<< HEAD
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
=======
    create: (fields)=>{
        const user = new userCollection(fields);
        return user.save();       
    },
    getAll: ()=> userCollection.find(),
    deleteById: (id) => userCollection.deleteOne({_id: id}),
    update: (id, fields) => userCollection.updateOne({_id: id}, fields)
>>>>>>> f6fdee607ee834fb54767274235141ee37b3db11
}
