const User = require("../model/userSchema")
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken')
const axios= require("axios")


require('../db/conn')

router.get('/', (req, res)=>{ 
    res.send("Hello world from router js")
})

router.post('/register', async(req,res)=>{

    const {name, email, password, rePassword} = req.body 
    console.log(name, email, password, rePassword)
    if(!name || !email || !password || !rePassword){
        return res.status(422).json({error: "please fill the field"})
    }

    try{
        const userExist = await User.findOne({email:email})
        
        if(userExist)
            {
                return res.status(422).json({error: "Email already Exist"})
            }else if(password != rePassword){
                return res.status(422).json({error: "Password is not matching"})
            }else{
                
            const user = new User({name, email, password, rePassword})
            const userRegister = await user.save()
            
            if(userRegister){
                res.status(201).json({message: "user registered succesfully"})
            }else{
                res.status(500).json({error:"Failed to Register"})
            }
            }
    
    } catch(err) {
            console.log(err)
    }
    
    // res.json({message: req.body})
    // res.send("my page")
})

//  LOGIN ROUTE
router.post('/signin', async (req,res)=>{
    let token
    console.log(req.body)
    // res.json({message:"Nice"})
    
    try{
        const  {email , password} = req.body
            console.log(email)
        if(!email || !password){
            return res.status(400).json({error:"please fill the data"})
        }

        const userLogin = await User.findOne({email:email})
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)   
        
            token = await userLogin.generateAuthToken()
            console.log(token)
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now()+25892000000),
                httpOnly: true
            })

            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials "})
            }else{
                res.json({message:"user Signin Succesfull"})
            }
        }else{
            res.status(400).json({error:"Invalid Credentials "}) 
        }
        // console.log(userLogin)
        
    }catch(err){
        console.log(err)
    }

})

router.post('/resumewala', async (req,res)=>{
    const {name} = req.body 
    console.log(req.body)
})


module.exports = router