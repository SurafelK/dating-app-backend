const express = require('express')
const { createCard, getCards } = require('../controller/cardController')
const router = express.Router()

router.post( '/dating/cards', createCard)
router.get('/dating/cards', getCards);

module.exports = router