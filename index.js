const express = require("express");
const multer = require("multer");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  //   {
  //     fieldname: 'image',
  //     originalname: 'dead.jpg',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     destination: './uploads',
  //     filename: '1718792898559dead.jpg',
  //     path: 'uploads/1718792898559dead.jpg',
  //     size: 108413
  //   }
});

app.listen(PORT, () => {
  console.warn(`app is running on ${PORT}`);
});
