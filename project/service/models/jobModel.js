const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
   
    jobTitle: String,
    description: String,
    maxSalary: String,
    companyName:String,
    recruiterDtls:{
        name: String,
        emailId: String,
       contactNo: String}
});

const jobCollection = mongoose.model("jobs", jobSchema);

module.exports = {
    create: (fields)=>{
        const user = new jobCollection(fields);
        return user.save();       
    },
    getAll: ()=> jobCollection.find(),
    deleteById: (id) => jobCollection.deleteOne({_id: id}),
    update: (id, fields) => jobCollection.updateOne({_id: id}, fields)
}
