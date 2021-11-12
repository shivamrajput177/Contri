const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const isLogged = require('../middleware/isLogged')

dotenv.config()

router.get('/classified',isLogged,(req,res)=>{
    res.send("Hello user")
})

router.post('/signup',(req,res)=>{
    const {username,email,password} = req.body
    if(!email || !password || !username ){
        res.status(400).json({error:"Please add all the fields "})
    }
    User.findOne({username:username})
    .then((savedUser)=>{
        if(savedUser){
            res.status(400).json({error:"username already taken"})
        }
    })
    .catch((err)=>{
        console.log(err)
    })

    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            res.status(400).json({error:"User Already Exist with Same Email"})
        }
        bcrypt.hash(password,12)
        .then(hashedPassword=>{
            const user = new User({
                username,
                email,
                password : hashedPassword,
            })
            user.save()
            .then((user)=>{
                res.json({message:"Saved Successfully"})
            })
            .catch((err)=>{
                res.status(400).json({message:`${err} Eww`})
            })
        })
        
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/signin',(req,res)=>{
    const {username,password} = req.body
    if(!username || !password) {
        res.status(400).json({error : "Please add Username or Password"})
    }

    User.findOne({username:username})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(400).json({error : "No Such User exist "})
        }
        bcrypt.compare(password,savedUser.password)
        .then(same=>{
            if(same){
                // res.json(200).json({message:"SuccessFully Signed In"})
                const token = jwt.sign({_id:savedUser._id},process.env.JWT_SECRET)
                res.json({token})
            }else{
                res.json(400).json({error:"Invalid Password"})
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports = router