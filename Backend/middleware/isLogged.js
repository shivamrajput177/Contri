const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = mongoose.model("User")

dotenv.config()

module.exports = (req,res,next) =>{
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error : "You must be Logged In"})
    }

    const token = authorization.replace("Bearer ","")
    
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error : "You must be Logged In"})
        }

        const {_id} = payload
        User.findById(_id)
        .then(userInfo=>{
            req.user = userInfo
            next()
        })

    })
}