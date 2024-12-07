const Product=require("../model/product")

//api to add
const createProduct=async(req,res)=>{
    try {
        await Product(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error);
    }
}

const viewProduct=async(req,res)=>{
    try {
        const data=await Product.find()
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}
const deleteProduct=async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error);
    }
}
const updateProduct=async(req,res)=>{
    try {
        await  Product.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Updated successfully"})
    } catch (error) {
        console.log(error);
    }
}
module.exports={createProduct,viewProduct,deleteProduct,updateProduct}