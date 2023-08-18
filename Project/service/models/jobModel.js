const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    jobTitle: String,
    jobDesc: String,
    maxSalary: Number,
    companyName: String,
    recruiterDtl: {
        name: String,
        emailId: String,
        contactNo: Number
    }
});

const jobCollection = mongoose.model("job", jobSchema);

module.exports = {
    create: (fields)=>{
        const job = new jobCollection(fields);
        return job.save();
    },
    getAll: ()=> jobCollection.find(),
    deleteById: (id) => jobCollection.deleteOne({_id: id}),
    update: (id, fields) => jobCollection.update({_id: id},fields),

}