const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema (
  {
    name: {type: String},
    type: {type: String},
    cost: {type: Number},
    description: {type: String},
    productId: { type: String },
  },
  {timestamps: true}
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;

