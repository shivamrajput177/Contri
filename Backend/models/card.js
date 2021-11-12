const mongoose = require('mongoose')

const {Schema} = mongoose
const {ObjectId} = mongoose.Types

const cardSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    body:{
        type : String,
        required : true,
    },
    card_img : {
        type : String,
        default : "Image"
    },
    postedBy : {
        type : ObjectId,
        ref : "User",
    }
},{
    timestamps:true,
})

mongoose.model("Card",cardSchema)

