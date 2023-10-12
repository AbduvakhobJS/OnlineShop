const express = require('express')
const router = express.Router()
const CartController = require('../controller/cartController')


router.post('/create', CartController.createCart)
router.get('/all', CartController.getAll)
router.get('/:id', CartController.getOne)
router.delete('/:id', CartController.deleteOne)





module.exports = router