const router = require("express").Router();
const fileupload = require("express-fileupload");
const cloudinary = require("./cloudinaryUploader");
router.use(fileupload({ useTempFiles: true }));

router.get("/", (req,res) => {
    res.status(201).json("cloudinary");
})

router.post("/", (req, res) => {
  let file = req.files.file;
  cloudinary(file.tempFilePath, (error, result) => {
    if (result && result.url) {
      console.log(result);
      res.status(201).json(result);
    } else {
      console.log(error);
      res.status(500).json(error);
    }
  });
});

module.exports = router;
