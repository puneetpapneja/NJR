const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    
    
});

const postjobCollection = mongoose.model("users", postjobSchema);

module.exports = {
    create: (fields)=>{
        const postjob = new postjobCollection(fields);
        return postjob.save();       
    },
    getAll: ()=> postjobCollection.find(),
    deleteById: (id) => postjobCollection.deleteOne({_id: id}),
    update: (id, fields) => postjobCollection.updateOne({_id: id}, fields)
}
