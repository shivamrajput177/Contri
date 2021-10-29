const mongoose = require('mongoose')

const {Schema} = mongoose


const UserSchema = new Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    password : {
        type : String,
        required : [true,"can't be blank"],
        match : "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    },
    password2 : {
        type : String,
        required : [true,"can't be blank"],
        match : "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    },
},{
    timestamps:true,
})




const UserModal = mongoose.model('UserSchema',UserSchema)
module.exports = UserModal