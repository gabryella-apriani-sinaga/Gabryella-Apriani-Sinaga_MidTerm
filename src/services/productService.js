const Product = require("../models/productModel");

exports.getProductList = async (videoId) => {
  return await Product.find({ videoThumbnailId: videoId });
};
