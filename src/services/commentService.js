const Comment = require("../models/commentModel");

exports.getCommentList = async (videoId) => {
  return await Comment.find({ videoThumbnailId: videoId });
};

exports.createComment = async (body, videoId) => {
  body.videoThumbnailId = videoId;
  return Comment.create(body);
};
