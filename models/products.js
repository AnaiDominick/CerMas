const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  units: { type: Number, required: true },
  price: { type: Number, required: true }
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
