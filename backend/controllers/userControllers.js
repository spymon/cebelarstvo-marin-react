const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../utils/auth')

//Register User
const createNewUser = async (req, res) => {
  const { name, email, password } = req.body
  try {
    //Create new user
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password, 10), // password must be encrypted before saved in the DB
    })

    const createdUser = await user.save()

    res.status(201).send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    })
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
  }
}

//Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    //Check if the user Exists in the DB
    if (user) {
      //Compare if the passwords match
      if (bcrypt.compareSync(password, user.password)) {
        //if the passwords match then return object with user info
        res.status(200).send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        })
      } else {
        res.status(401).send({ message: 'Invalid email or password' })
      }
    } else {
      res.status(401).send({ message: 'Invalid email or password' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
  }
}

module.exports = {
  createNewUser,
  loginUser,
}
