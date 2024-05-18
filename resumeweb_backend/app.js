// // import express from "express"
// // import cors from "cors"
// // const mongoose = require("mongoose");

// // mongoose.connect("mongodb://localhost:27017/resumehere")
// // .then(()=> console.log("Connection successfull...."))
// // .catch((err) => console.log(err));

// // const app = express()
// // app.use (express.json())
// // app.use (express.urlencoded())
// // app.use(cors())

// // mongoose.connect("mongodb://localhost:127.0.0.1:27017/resumeweb",{
// //     useNewUrlParser: true,
// //     useUnifieldTopology: true
// // },() => {
// //     console.log("Db connected")
// // })


// // // Routes
// // app.get("/",(req,res)=>{
// //     res.send("My API")
// // })

// // app.listen(9002, () => {
// //     console.log("BE started at port 9002")
// // })

// const express = require('express')
// const cors = require('cors')
// const User = require('./Config')
// const app = express()
// app.use(express.json())
// app.use (cors())

// app.post("/create",async(req,res)=>{
//     const data = req.body
//     // console.log("Data of Users", data )
//     await User.add(data)
//     res.send({msg:"User Added"})
// })

// app.get("/",async(req,res)=>{
//     const snapshot =await User.get()
//     // const ids = snapshot.docs.map((doc)=>doc.id)
//     // console.log(ids)
//     const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
//     res.send(list)
// })

// // firebase.database()
// //   .ref('users')
// //   .set({
// //     email,
// //   })
// // const userSchema = 

// app.listen(4000,()=>console.log("Up and Running 4000"))

// // Route
// // app.post("/Login",(req,res)=>{
// //     res.send ("My API login")
// // })

// // app.post("/New",(req,res)=>{
// //     res.send ("My API Register")
// // })

