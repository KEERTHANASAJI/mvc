const express=require('express')

const router=express.Router()

const {createUser,viewUser, deleteUser,updateUser}=require('../controller/userapi')

//routes
router.post('/',createUser);
router.delete('/:id',deleteUser);
router.get("/",viewUser);
router.put("/:id",updateUser);
module.exports=router; 