const VideoThumbnail = require("../models/videoModel");

exports.getVideoThumbnailList = async () => {
  return await VideoThumbnail.find();
};
