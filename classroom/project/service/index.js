const express = require('express');
const app = express();
const jobRoutes = require('./routes/jobRoutes.js');

app.use(express.json()); // Middleware for parsing JSON

app.use('/api/jobs', jobRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});