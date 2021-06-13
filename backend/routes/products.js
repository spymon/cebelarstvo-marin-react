const router = require('express').Router()
const Product = require('../models/Product')

//Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    res.status(400).send(error)
  }
})

//Get one products
router.get('/:id', async (req, res) => {
  try {
    const products = await Product.findById({ _id: req.params.id })
    res.send(products)
  } catch (error) {
    res.status(400).send(error)
  }
})

//Create product
router.post('/', async (req, res) => {
  const { name, description, weight, price, countInStock } = req.body

  //Creating new Product
  const product = new Product({
    name,
    description,
    weight,
    price,
    countInStock,
  })

  //Save Product
  try {
    const savedProduct = await product.save()
    res.send(savedProduct)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
