const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    addres:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    uf:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

mongoose.model('User', UserSchema)