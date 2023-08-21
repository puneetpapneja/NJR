/*const userModel = require('../models/userModel');

module.exports = {
    create: (req, res) => {
        //logic/data validation code write here
        return userModel.create(req.body)
        .then((data) => {
            return res.send({status: "ok", msg:"User created successfully.", data: data})
        })
        .catch((err)=>{
            return res.send({status: "fail", error: err});
        });
    },
    getAll: (req, res) => {
        return userModel.getAll()
        .then((allUsers)=> res.send(allUsers))
        .catch((err) => res.send({status: "fail", error: err, code: 500}));
    },
    deleteById: (req,res) => {
        return userModel.deleteById(req.body.id)
        .then((deletedUser) => res.send({status: "OK", msg: "User deleted successfully.", deletedUser: deletedUser}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    },
    update: (req,res)=> {
        return userModel.update(req.body.id, req.body.fields)
        .then((updatedUser) =>  res.send({status: "OK", msg: "User updated successfully.", updatedUser: updatedUser}))
        .catch((err)=> res.send({status:"fail", errro: err}));
    }
}*/


const userModel = require('../models/userModel');

module.exports = {
  create: async (req, res) => {
    const userData = req.body;
    userModel.create(userData)
      .then((data) => {
        return res.send({ status: "ok", msg: "User created successfully." });
      })
      .catch((err) => {
        return res.send({ status: "fail", error: err });
      });
  },
  
  getAll: async (req, res) => {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  },

  getById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  },

  update: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const updatedUser = await userModel.findByIdAndUpdate(userId, updatedData, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  },

  delete: async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await userModel.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  }
};