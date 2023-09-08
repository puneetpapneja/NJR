const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  type: String,
  companyName: String,
  Resume: String,
});

const userCollection = mongoose.model("user", userSchema);

module.exports = {
  create: (fields) => {
    const user = new userCollection(fields);
    return user.save();
  },
  getAll: () => {
    return userCollection.find();
  },
  deleteById: (id) => userCollection.deleteOne({ _id: id }),
  update: (id, fields) =>
    userCollection.updateOne({ _id: id }, { $set: fields }),
  getByEmail: (email) => userCollection.find({ emailId: email }),
  getUser: (email, password) =>
    userCollection.find({ emailId: email, password: password }),
};
