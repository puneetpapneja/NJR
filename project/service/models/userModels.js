const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
});

const userCollection = mongoose.model("users", userSchema);

module.exports = {
    create: (fields)=>{
        const user = new userCollection(fields);
        return user.save();       
    },
    getAll: ()=> userCollection.find(),
    deleteById: (id) => userCollection.deleteOne({_id: id}),
    update: (id, fields) => userCollection.updateOne({_id: id}, fields)
}
