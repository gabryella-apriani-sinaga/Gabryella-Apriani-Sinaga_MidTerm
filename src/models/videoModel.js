const mongoose = require("mongoose");

const videoThumbnailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "video thumbnail harus punya title"],
  },

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
