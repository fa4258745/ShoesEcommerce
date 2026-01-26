const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  size: { type: String, required: true },
  stock: { type: Number, required: true },
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String],
  defaultImage: String,
  sizes:[sizeSchema]
});
module.exports = mongoose.model("product", productSchema);
