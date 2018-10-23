const express = require('express')
const router = express.Router()

const GroupCardController = require('../app/Controllers/GroupCardController')

router.get('/groupCard', GroupCardController.index)
router.post('/groupCard', GroupCardController.store)

module.exports = router
