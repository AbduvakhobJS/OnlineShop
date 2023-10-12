const express = require('express');
const router = express.Router()
const ProductController = require('../controller/productController')
const multer = require('multer');
const path = require('path')
const md5 = require('md5');



const Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/productImage')
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: Storage })

router.post('/create', upload.array("images", 12), ProductController.createImage)
router.get('/all', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.put('/:id', upload.array("images", 12), ProductController.updateFile)
router.delete('/:id', ProductController.deleteFile)
router.put('/like/:id', ProductController.like_one)
// router.put('/dislike/:id', ProductController.like_twe)



module.exports = router