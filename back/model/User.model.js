const mongoose=require('mongoose')

const userModel=mongoose.model('user',new mongoose.Schema({
    name:String,
    surname:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:Number
},{timestamps:true}))

module.exports={userModel}