const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const cloudinary = require("../router/cloudinary/cloudinaryRouter")
const google = require("../router/googleCloud/googleRouter")
server.use("/cloudinary", cloudinary)
server.use("/google", google)


server.get("/", (req, res) => {
  res.status(200).json({ api: "file uploader api running" });
});

module.exports = server;
