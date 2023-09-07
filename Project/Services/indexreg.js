const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userType: String, // Add userType field
});

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo', async (req, res) => {
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.userType = req.body.userType; // Save userType
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
});

server.get('/demo', async (req, res) => {
    const docs = await User.find({});
    res.json(docs)
});


// server.get('/demo', async (req, res) => {
//     const username = req.query.username; // Assuming you're passing the username as a query parameter
//     const user = await User.findOne({ username });
//     if (user) {
//         res.json({ userType: user.userType });
//     } else {
//         res.status(404).json({ error: 'User not found' });
//     }
// });



server.get('/userType/:username', async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username });
    if (user) {
        res.json({ userType: user.userType });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});






server.listen(7070, () => {
    console.log('server started')
});