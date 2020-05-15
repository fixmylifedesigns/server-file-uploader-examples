const router = require("express").Router();
const { uploadImageToStorage, multer } = require("./googleCloudUploader.js");

router.get("/", (req, res) => {
  res.status(200).json("google");
});

router.post("/", multer.single("file"), (req, res) => {
  let file = req.file;
  uploadImageToStorage(file)
    .then((success) => res.status(201).json(success))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
