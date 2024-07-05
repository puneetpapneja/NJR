const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const apiRouter = require('./router/router');

mongoose.connect('mongodb://127.0.0.1:27017/MajeHiMaje')
  .then(() => {
    console.log('Database is connected');
  })
  .catch((error) => {
    console.log(error);
  });

// Apply CORS middleware before routes
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use your API router
app.use(express.static('./public/uploads'))

app.use(apiRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
