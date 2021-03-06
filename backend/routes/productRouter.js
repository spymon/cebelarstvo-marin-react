const router = require('express').Router()
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/ProductControllers')
const { isAuth, isAdmin } = require('../utils/auth')

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
router.post('/', isAuth, isAdmin, createProduct)

// desc   PUT update product and save updated product to the DB
// route  PUT /api/products/:id
// access private (Admin only)
router.put('/:id', isAuth, isAdmin, updateProduct)

// desc   DELETE delete product from the DB
// route  DELETE /api/products/:id
// access private (Admin only)
router.delete('/:id', isAuth, isAdmin, deleteProduct)

module.exports = router
