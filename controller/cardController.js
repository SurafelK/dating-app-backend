const asyncHandler = require('express-async-handler')

const createCard = (req,res) =>
{
    const {name, imgURL} = req.body;

    if(!name)
    {
        res.status(401).json({
            message:"Please enter your name"
        })
    }
    
    

}

module.exports = {createCard}