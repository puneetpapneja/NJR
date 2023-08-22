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
    create: (fields)=>{
        const user = new userCollection(fields);
<<<<<<< HEAD:service/models/userModel.js
        return user.save()
        .then((data)=>{
            return res.send({status: "ok", msg:"User created changes"});
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        })
    }
}
=======
        return user.save();       
    },
    getAll: ()=> userCollection.find(),
    deleteById: (id) => userCollection.deleteOne({_id: id}),
    update: (id, fields) => userCollection.updateOne({_id: id}, fields)
}
>>>>>>> 86708f3314dc81e5c0f0471ebadb140c641993ba:classroom/service/models/userModel.js
