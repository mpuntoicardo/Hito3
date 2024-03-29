const mongoose= require('mongoose');

const UserSchema= mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:[3,'Tiene que ser más largo'],
        max: 24
    },
    surname:{
        type: String,
        required: true
    },
    password:{
        type: String,
        uppercase: true,
        required: true
    },
   email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: false,
        maxlength: 9,
        minlength: 9,
    },
    date: {
        type: Date,
        default: Date.now
    } 
})
module.exports=mongoose.model('User',UserSchema);