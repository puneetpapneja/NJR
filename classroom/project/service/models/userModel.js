const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  type: String,
  companyName: String,
});

const userCollection = mongoose.model("users", userSchema);

module.exports = {
  create: (fields) => {
    const user = new userCollection(fields);
    return user.save();
  },
  getAll: () => {
    return userCollection.find();
  },
  deleteById: (id) => userCollection.deleteOne({ _id: id }),
  update: (id, fields) => userCollection.updateOne({ _id: id }, fields),
  hasValidUser: (emailId, password) => {
    return userCollection.find({ emailId: emailId, password: password });
  },
};