const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const isLogged = require('../middleware/isLogged')
const Property = mongoose.model('Property')


router.post('/addProperty',(req,res)=>{
    const {address,filled_fraction,rental_yield,yearly_return,
        investment_overview,images,price,specification} = req.body 
    if(!address || !filled_fraction || !rental_yield || !yearly_return
        || !investment_overview || !price || !specification ){
        return res.status(400).json({error:"Fill all the fields"})
    }
    console.log(address);
    console.log(filled_fraction);
    console.log(rental_yield);
    console.log(yearly_return);
    console.log(investment_overview);
    console.log(price);
    console.log(specification);

    const property = new Property({
        address,
        filled_fraction,
        rental_yield,
        yearly_return,
        investment_overview,
        images,
        price,
        specification,
    })
    property.save()
    .then(result=>{
        res.status(200).json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/:id',(req,res)=>{    
    Property.findById({ _id : req.params.id})
    .populate('address','price')
    .then(prop =>{
        res.json({prop : prop})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router