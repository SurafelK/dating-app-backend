const express = require('express')
const { createCard } = require('../controller/cardController')
const router = express.Router()

router.post( '/dating/cards', createCard)

module.exports = router