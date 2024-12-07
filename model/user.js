const mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name:String,
    Email:String,
    Id:Number,
   
    
})

var UserModel = mongoose.model("User",schema)//product is the table name
module.exports =UserModel