const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cardRouter = require('./routes/cardRoutes')

const app = express()


// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());


// Routes
app.use(cardRouter)

const PORT = process.env.PORT || 5000

mongoose.connect( process.env.MONGO_URI )
        .then(() =>
        {
            app.listen(PORT, () =>
            {
                console.log(`PORT has Started ${PORT}`);
            })
        }).catch((err) => console.log(err))