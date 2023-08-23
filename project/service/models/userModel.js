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
    create: (fields)=>{
        const user = new userCollection(fields);
<<<<<<< HEAD
        return user.save();       
=======
        return user.save()  
        console.log(user)    
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
    },
    getAll: ()=> userCollection.find(),
    deleteById: (id) => userCollection.deleteOne({_id: id}),
    update: (id, fields) => userCollection.updateOne({_id: id}, fields)
}

