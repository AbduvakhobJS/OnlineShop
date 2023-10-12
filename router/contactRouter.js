const express = require('express')
const router = express.Router()
const ContactController = require('../controller/contactController')

router.post('/create', ContactController.createContact)
router.get('/all', ContactController.getAll)
router.get('/:id', ContactController.getOne)
router.put('/:id', ContactController.update)
router.delete('/:id', ContactController.delete)




module.exports = router