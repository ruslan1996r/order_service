const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
});

// <input type="file" name="file" /> ожидает такого инпута на клиента
const uploadFile = multer({ storage: storage }).single("file");

module.exports = { uploadFile };