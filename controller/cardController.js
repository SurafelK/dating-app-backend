const Card = require("../model/cardModel");

const createCard = async (req, res) => {
  try {
    const { name, imgURL } = req.body;

    if (!name || name.length < 4) {
      return res.status(401).json({
        message: "Please enter a name with at least 4 characters",
      });
    }

    const card = await Card.create({
      name,
      imgURL,
    });

    if (card) {
      return res.status(200).json({
        message: "Card created successfully",
        name: card.name,
        imgURL: card.imgURL,
      });
    } else {
      return res.status(500).json({
        message: "Failed to create card",
      });
    }
  } catch (err) {
    console.error("Error on creating:", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getCards = async (req, res) => {
    try {
      const cards = await Card.find();
  
      if (!cards) {
        return res.status(500).json({
          message: "Error. Please try again later.",
        });
      }
  
      return res.status(200).json(cards);
    } catch (error) {
      console.error("Error in getCards:", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  

module.exports = { createCard, getCards };
