const express=require('express');

const app =express();

const port=5000

app.use(express.json());

app.listen(5000,()=>{console.log("service started",port)})