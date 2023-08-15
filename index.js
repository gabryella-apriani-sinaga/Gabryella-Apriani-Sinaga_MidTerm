const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const videoThumbnailRoute = require("./src/routes/videoRoute");
const productRoute = require("./src/routes/productRoute");
const commentRoute = require("./src/routes/commentRoute");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
};

// 1) MIDDLEWARES
  app.use(morgan("dev"));
  app.use(cors(corsOptions));

app.use(express.json());

// 2) ROUTES
app.use("/api/video-thumbnails", videoThumbnailRoute);
app.use("/api/products", productRoute);
app.use("/api/comments", commentRoute);

module.exports = app;
