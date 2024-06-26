const { error } = require('console')
const express=require('express')
const app =express()
const cors=require('cors')
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Architect').then(()=>{
    console.log('data base is connect')
}).catch((error)=>{
    console.log(error)
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


const API=require('./router/router')
app.use(API)








const PORT=9500;

app.listen(PORT,()=>{
    console.log(`this port is run by ${PORT}`)
})