const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser')
const mongoose=require('mongoose');
const UserModel = require('./models/Users')
server.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice');
    console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userschema = new mongoose.Schema({
    jobtitle: String,
    jobdesc: String,
    jobsal: Number
});

const User = mongoose.model('User', userschema);

module.exports=User;

server.use(cors());

server.use(bodyParser.json());

server.post('/demo',async(req,res)=>{

    let user=new User(); 
    user.jobtitle = req.body.jobtitle;
    user.jobdesc = req.body.jobdesc;
    user.jobsal = req.body.jobsal;
    
    const doc = await user.save();
    console.log(doc);
    
    res.json(req.body);
})

mongoose.connect("mongodb://127.0.0.1:27017/practice")


server.get('/getusers', (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

server.listen(8080,()=>{
    console.log('server started')
})



