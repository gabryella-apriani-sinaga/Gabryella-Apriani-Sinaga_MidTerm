const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_MONGODB_ATLAS_URI;

mongoose
  .connect(DB)
  .then((conn) => {console.log("Koneksi Berhasil")})
  .catch((err) => {
    console.log(err.message);
  });

const app = require("./index");

const port = parseInt(process.env.PORT);
const host = process.env.HOST;
app.listen(port, host, () => {
  console.log(`web service running on http://${host}:${port}`);
});
