import express from 'express'
import { adminOnly } from '../middlewares/auth.js'
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct
  
} from '../controllers/product.js'
import { singleUpload } from '../middlewares/multer.js'

const app = express.Router()

// @/api/v1/product/new
app.post('/new', singleUpload, newProduct)

// @/api/v1/product/all
app.get("/all", getAllProducts);

// @/api/v1/product/latest
app.get('/latest', getlatestProducts)

// @/api/v1/product/categories
app.get('/categories', getAllCategories)

// @/api/v1/product/admin-products
app.get('/admin-products', getAdminProducts)

// // To get, update, delete Product
app
  .route("/:id")
  .get(getSingleProduct)
  .put(singleUpload, updateProduct)
  .delete( deleteProduct);

export default app
