const jwt = require('jsonwebtoken')

generateToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1hr',
    }
  )
}

const isAuth = async (req, res, next) => {
  const authorization = req.headers.authorization
  if (authorization) {
    const token = authorization.split(' ')[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' })
      } else {
        req.user = decoded
        next()
      }
    })
  } else {
    res.status(401).send({ message: 'No Token' })
  }
}

const isAdmin = async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' })
  }
}

module.exports = {
  generateToken,
  isAuth,
  isAdmin,
}
