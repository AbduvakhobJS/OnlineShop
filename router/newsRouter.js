const express = require('express');
const router = express.Router()
const NewsController = require('../controller/newsController')
const multer = require('multer');
const path = require('path')
const md5 = require('md5')


// Fayl yuklash uchun
const Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/newsImage')
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: Storage })


router.post('/create', upload.array("images", 12), NewsController.createImage)
router.get('/all', NewsController.getAll)
router.get('/:id', NewsController.getOne)
router.put('/:id', upload.array("images", 12), NewsController.updateFile)
router.delete('/:id', NewsController.deleteFile)
router.put('/plus/:id', NewsController.views_one)


module.exports = router            



