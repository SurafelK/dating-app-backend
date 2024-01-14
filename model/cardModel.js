// cardModel.js

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
    default: "https//i.ibb.co/4pDNDK1/avatar.png"
  },
  // Add other fields as needed
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
