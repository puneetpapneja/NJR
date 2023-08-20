const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    jobField: String,
    discription: String,
    maxSalary: Number,
    companyName: String,
    recuriterDtl: {
        name: String,
        emailId: String,
        contactNo: Number,
    }
});

const jobCollection = mongoose.model("jobs",jobSchema)

module.exports = {
    create:(fields, res) => {
        const job = new jobCollection(fields)
        return job.save()
    },
    getALL: () =>  jobCollection.find(),
    deleteById: (Id) => jobCollection.deleteOne({_id:Id}),
    updateJob: (Id,fields) => jobCollection.updateOne({_id:Id},fields)
}