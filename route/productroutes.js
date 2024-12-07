const express=require('express')

const router=express.Router()

const {createProduct,viewProduct, deleteProduct,updateProduct}=require('../controller/productapi')

//routes
router.post('/',createProduct);
router.delete('/:id',deleteProduct);
router.get("/",viewProduct);
router.put("/:id",updateProduct);
module.exports=router; 