const router = require('express').Router()
const {
  getAllProducts,
  getProductById,
  createProduct,
} = require('../controller/ProductControllers')

// desc   GET all products from DB
// route  GET /api/products
// access Public
router.get('/', getAllProducts)

// desc   GET one product by id from DB
// route  GET /api/products/:id
// access Public
router.get('/:id', getProductById)

// desc   POST create new product and save it to DB
// route  POST /api/products
// access private (Admin only)
router.post('/', createProduct)

module.exports = router
