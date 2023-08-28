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