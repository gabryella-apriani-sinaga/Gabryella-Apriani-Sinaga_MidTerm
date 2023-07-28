const express = require("express");
const morgan = require("morgan");
const videoThumbnailRoute = require("./src/routes/videoRoute");
const productRoute = require("./src/routes/productRoute");
const commentRoute = require("./src/routes/commentRoute");

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// 2) ROUTES
app.use("/api/video-thumbnails", videoThumbnailRoute);
app.use("/api/products", productRoute);
app.use("/api/comments", commentRoute);

module.exports = app;
