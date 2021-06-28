const Product = require('../models/ProductModel')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
    res.send(product)
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
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
    res.status(500).send({ message: 'Server Error' })
  }
}

const updateProduct = async (req, res) => {
  const { name, description, weight, price, countInStock } = req.body
  const productId = req.params.id
  try {
    const product = await Product.findById(productId)

    if (product) {
      product.name = name || product.name
      product.description = description || product.description
      product.weight = weight || product.weight
      product.price = price || product.price
      product.countInStock = countInStock || product.countInStock

      const updatedProduct = await product.save()

      res.status(200).send(updatedProduct)
    } else {
      res.status(404).send({ message: 'Product Not Found' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
  }
}

const deleteProduct = async (req, res) => {
  const productId = req.params.id
  try {
    const product = await Product.findByIdAndDelete(productId)
    if (product) {
      res.status(200).send({ message: 'Product Delete Success' })
    } else {
      res.status(404).send({ message: 'Product Not Found' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
}
