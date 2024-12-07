const User=require("../model/user")

//api to add
const createUser=async(req,res)=>{
    try {
        await User(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error);
    }
}

const viewUser=async(req,res)=>{
    try {
        const data=await User.find()
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}
const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error);
    }
}
const updateUser=async(req,res)=>{
    try {
        await  User.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Updated successfully"})
    } catch (error) {
        console.log(error);
    }
}
module.exports={createUser,viewUser,deleteUser,updateUser}