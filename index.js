//importing
const express=require('express')
const dotenv =require('dotenv')
const ProductRoutes=require('./route/productroutes')
const UserRoutes=require('./route/userroutes')
//initialize
const app=express()
dotenv.config()
require("./config/database")
app.use(express.json());
//userroutes
app.use('/api/products',ProductRoutes)
app.use('/api/user',UserRoutes)

//port setting
const PORT=process.env.PORT
app.listen(PORT,() =>{
    console.log(`port is running ${PORT}`);
})  
