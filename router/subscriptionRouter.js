const express = require('express');
const router = express.Router()
const SubscriptionController = require('../controller/subscriptionController')

router.post('/create', SubscriptionController.subscription)
router.get('/all', SubscriptionController.getAll)
router.get('/:id', SubscriptionController.getOne)
router.delete('/:id', SubscriptionController.delete)
router.put('/:id', SubscriptionController.update)



module.exports = router