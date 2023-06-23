const util = require("util");
const multer = require('multer');
const maxSize = 5 * 1024 * 1024;
const flagMaxSize = 1024 * 1024;
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/public/uploads/");
    },
    filename: (req, file, cb) => {
        console.log("File: " + file.originalname);
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.originalname}`);
    },
});
// Multer Filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype == "png" || "jpeg") {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};
const uploadImage = multer({
    storage: multerStorage,
    // fileFilter: multerFilter,
    limits: { fileSize: maxSize },
}).single("image");
const uploadFlag = multer({
    storage: multerStorage,
    // fileFilter: multerFilter,
    limits: { fileSize: flagMaxSize },
}).single("flag");
const uploadAppLogo = multer({
    storage: multerStorage,
    // fileFilter: multerFilter,
    limits: { fileSize: maxSize },
}).single("logo");
let uploadMiddleware = util.promisify(uploadImage);
let uploadFlagMiddleware = util.promisify(uploadFlag);
let uploadAppLogoMiddleware = util.promisify(uploadAppLogo);

module.exports = { uploadMiddleware, uploadFlagMiddleware, uploadAppLogoMiddleware };