require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

//Connection to the DB
mongoose.connect(process.env.DB_URI,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
   },
   () => console.log('connected to db!')
)

const PORT = process.env.PORT || 3000

//Import Routes
const productRoute = require('./routes/products')

//Middleware
app.use(bodyParser.json())

//Route Middleware
app.use('/products', productRoute)

app.listen(PORT, () => {console.log(`listening on port: ${PORT}`)})