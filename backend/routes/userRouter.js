const { createNewUser, loginUser } = require('../controller/userControllers')

const router = require('express').Router()

// Creating new user
router.post('/register', createNewUser)

// Login user
router.post('/login', loginUser)

module.exports = router
