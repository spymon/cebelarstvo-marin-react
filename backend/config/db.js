require('dotenv').config()
const mongoose = require('mongoose')

//Connection to the DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MondoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = connectDB
