const mongoose = require('mongoose')

const {Schema} = mongoose


const UserSchema = new Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    password : {
        type : String,
        required : [true,"can't be blank"],
    },
},{
    timestamps:true,
})




mongoose.model('User',UserSchema)
