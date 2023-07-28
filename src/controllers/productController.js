const productService = require("../services/productService");

exports.getProductList = async (req, res) => {
  try {
    const data = await productService.getProductList(req.params.videoId);
    res.status(200).json({
      status: "success",
      data: {
        products: data,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
