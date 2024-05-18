const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require("express")
const app = express()

dotenv.config({path:'./config.env' })
require('./db/conn');
// const User = require('./model/userSchema')

app.use(express.json())

// We link the router file to make our route easy
app.use(require('./router/auth'))

const PORT = process.env.PORT

const middleware = (req,res,next)=>{
    console.log("Hello middleware")
}

// app.get('/', (req, res)=>{ 
//     res.send("Hello world")
// })

app.get('/about', (req, res)=>{
    res.send("Hello about world")
})

app.get('/signup', (req, res)=>{
    res.send("Hello signup world")
})

app.get('/login', (req, res)=>{
    res.send("Hello login world")
})

app.listen(PORT, ()=>{
    console.log("Server start at port ${PORT}")
})

