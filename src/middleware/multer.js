const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        const timeStamp = new Date().getTime();
        const originalName = file.originalname;
        callback(null, `${timeStamp}-${originalName}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 //3 MB
    }
});

module.exports = upload;