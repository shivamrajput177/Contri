const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const isLogged = require('../middleware/isLogged')
const Card = mongoose.model('Card')

router.get('/allCards',(req,res)=>{
    Card.find()
    .populate('postedBy','_id username')
    .then(posts=>{
        res.json({posts:posts})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/addCard',isLogged,(req,res)=>{
    const {title,body} = req.body 
    if(!title || !body ){
        return res.status(400).json({error:"Fill all the fields"})
    }
    req.user.password = undefined
    const card = new Card({
        title,
        body,
        postedBy : req.user,
    })
    card.save()
    .then(result=>{
        res.status(200).json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myCards',isLogged,(req,res)=>{
    Card.find({postedBy : req.user._id})
    .populate('postedBy','_id name')
    .then(mycards =>{
        res.json({myposts : myposts})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router