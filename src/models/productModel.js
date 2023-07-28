const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "produk harus punya title"],
  },
  price: {
    type: Number,
    required: [true, "product harus punya price"],
  },
  linkProduct: {
    type: String,
    required: [true, "product harus punya linkProduct"],
  },
  videoThumbnailId: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
