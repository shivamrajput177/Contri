const mongoose = require('mongoose')

const {Schema} = mongoose

const PropertySchema = new Schema({
    address:{
        type : String,
        required : true,
    },
    price:{
        type : String,
        required : true,
    },
    specification:{
        type : String,
        required : true,
    },
    filled_fraction:{
        type : String,
        required: true,
    },
    rental_yield:{
        type : String,
        required: true,
    },
    yearly_return:{
        type : String,
        required: true,
    },
    investment_overview:{
        type: String,
        required: true,
    },
    images : {
        type: [String],
        default : "Image"
    },
},{
    timestamps:true,
})

mongoose.model("Property",PropertySchema)