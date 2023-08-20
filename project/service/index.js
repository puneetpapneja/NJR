const express = require("express");

const {port} = require('./config')

const db = require('./database')

const userRoute = require('./Route/userRoute')

const jobRoute = require('./Route/jobRoute')

const app = express();

app.use(express.json());
app.use('/user',userRoute)
app.use('/jobs',jobRoute)

app.get('/health',(req, res)=>{
res.send({status: "OK"})
})

app.listen(port,() => console.log("service started on port: ", port));

// const http = require('http')

// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html')
//     res.end('<h1> RAM RAM </h1>')
// })

// server.listen(port,()=>{
//     console.log(`Server is started at ${port}`)
// })