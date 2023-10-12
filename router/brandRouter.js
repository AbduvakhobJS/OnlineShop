const express = require('express')
const router = express.Router()
const BrandController = require('../controller/brandController.js')
const multer = require('multer')
const md5 = require('md5')
const path = require('path')




const Storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './public/brandImage')
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: Storage })

router.post('/create', upload.array("images", 12), BrandController.createImage)
router.get('/all',  BrandController.getAll)
router.get('/:id',  BrandController.getOne)
router.put('/:id', upload.array("images", 12), BrandController.updateFile)
router.delete('/:id', BrandController.deleteFile)



module.exports = router