const productModel = require("../models/productModel");
const ProductModel= require("../models/productModel");


// const homeDisplay=async(req, res)=>{
//     const Product = await ProductModel.find();
//     res.status(200).send(Product);
// }
const homeDisplay = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Home Display Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const productDisplay=async(req, res)=>{
    const {id} = req.query;
    const Product= await productModel.findById(id); 
    res.status(200).send(Product);
}

module.exports={
    homeDisplay,
    productDisplay
}