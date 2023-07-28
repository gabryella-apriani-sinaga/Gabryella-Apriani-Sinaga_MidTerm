const express = require("express");
const videoThumbnailController = require("../controllers/videoController");

const router = express.Router();

router
  .route("/")
  .get(videoThumbnailController.getVideoThumbnailList)

module.exports = router;
