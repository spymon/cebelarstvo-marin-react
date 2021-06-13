require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/db')

//Connection to the DB
connectDB()

const PORT = process.env.PORT || 5000

//Import Routes
const productRoute = require('./routes/products')

//Middleware
/* app.use(bodyParser.json()) */

//Route Middleware
app.use('/products', productRoute)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})
