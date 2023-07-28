const videoThumbnailService = require("../services/videoService");

exports.getVideoThumbnailList = async (req, res) => {
  try {
    const data = await videoThumbnailService.getVideoThumbnailList();
    res.status(200).json({
      status: "success",
      data: {
        videoThumbnailList: data,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
