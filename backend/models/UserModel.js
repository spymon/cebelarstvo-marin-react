const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    unique: true,
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
  isAdmin: {
    type: 'boolean',
    default: false,
    required: true,
  },
})

module.exports = mongoose.model('User', UserSchema)
