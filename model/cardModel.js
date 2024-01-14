const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

const Card = mongoose.Model("Card", cardSchema)

module.exports = Card