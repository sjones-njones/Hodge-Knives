const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    min: 0.99
  },
  category: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
