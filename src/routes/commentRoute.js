const express = require("express");
const commentController = require("../controllers/commentController");

const router = express.Router();

router
  .route("/:videoId")
  .get(commentController.getCommentList)
  .post(commentController.createComment);

module.exports = router;
