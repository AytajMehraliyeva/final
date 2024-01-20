const mongoose=require('mongoose')

const cardModel=mongoose.model("cardModel", new mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    img:String
}))

module.exports={cardModel}