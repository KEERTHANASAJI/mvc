const mongoose = require('mongoose')

var schema = mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    count:Number,
    description:String,
    
})

var ProductModel = mongoose.model("Product",schema)//product is the table name
module.exports =ProductModel