const Product = require('../models/ProductModel')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
    res.send(product)
  } catch (error) {
    res.status(400).send(error)
  }
}

const createProduct = async (req, res) => {
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
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
}
