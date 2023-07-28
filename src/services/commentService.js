const Comment = require("../models/commentModel");

exports.getCommentList = async (videoId) => {
  return await Comment.find({ videoThumbnailId: videoId });
};

exports.createComment = async (body, videoId) => {
  body.videoThumbnailId = videoId;
  body.timestamp = new Date();
  return Comment.create(body);
};
