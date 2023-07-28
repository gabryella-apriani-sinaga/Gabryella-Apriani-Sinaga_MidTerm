const mongoose = require("mongoose");

const videoThumbnailSchema = new mongoose.Schema({
  urlVideoThumbnail: {
    type: String,
    required: [true, "video thumbnail harus punya urlVideoThumbnail"],
  },

  urlImageThumbnail: {
    type: String,
    required: [true, "video thumbnail harus punya urlImageThumbnail"],
  },
});

const VideoThumbnail = mongoose.model("VideoThumbnail", videoThumbnailSchema);

module.exports = VideoThumbnail;
