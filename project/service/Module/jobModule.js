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
        const job = new jobCollection(fields);

        return job.save()

        .then((data) => {
            return res.send({status:"ok", msg:"job created succesfully"})
        })

        .catch((err) => {
            return res.send({status:"Fail", msg:"Error occur"})
        })
    }
}