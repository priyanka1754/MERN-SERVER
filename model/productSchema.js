const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    imageURL:{type:String,required:true}, 
    price:{type:Number,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true}})
    
module.exports= mongoose.model('Product',ProductSchema);