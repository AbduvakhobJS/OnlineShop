const express = require('express');
const router = express.Router()
const CategoryController = require('../controller/categoryController')

router.post('/create', CategoryController.category)
router.get('/all', CategoryController.getAll)
router.get('/:id', CategoryController.getOne)
router.put('/:id', CategoryController.update)
router.delete('/:id', CategoryController.delete)



module.exports = router