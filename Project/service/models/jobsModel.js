const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: String,
  maxsalary:String,
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  type: String,
  companyName: String,
});

const jobCollection = mongoose.model("jobs", jobSchema);

module.exports = {
  create: (fields) => {
    const job = new jobCollection(fields);
    return job.save();
  },
  getAll: () => jobCollection.find(),
  deleteById: (id) => jobCollection.deleteOne({ _id: id }),
  update: (id, fields) => jobCollection.updateOne({ _id: id }, fields),
  
  getSpecified: (field)=>{
        const regex = new RegExp(`.${field}.`, "i");
        return jobCollection.find({$or:[{title:{ $regex: regex} },{companyName:{ $regex: regex} }]});},
};
