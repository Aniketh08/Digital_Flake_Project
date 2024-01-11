const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductID: {
    type: String,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  ProductSize: {
    type: String,
    required: true,
  },
  ProductType: {
    type: String,
    required: true,
  },
  ProductMrp: {
    type: Number,
    required: true,
  },
  ProductStatus: {
    type: boolean,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
