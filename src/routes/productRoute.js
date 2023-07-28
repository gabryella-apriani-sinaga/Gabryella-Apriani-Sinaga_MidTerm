const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router
  .route("/:videoId")
  .get(productController.getProductList)

module.exports = router;
