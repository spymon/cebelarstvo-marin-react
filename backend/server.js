require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/db')

//Connection to the DB
connectDB()

const PORT = process.env.PORT || 5000

//Import Routes
const productRoute = require('./routes/productRouter')
const userRoute = require('./routes/userRouter')

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Route Middleware
app.use('/api/products', productRoute)
app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})
