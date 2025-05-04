import express from 'express';
import {
  getAllProducts,
  getProductById,
  getProductsByEmail,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/get-products', getAllProducts);
router.get('/product/:id', getProductById);
router.get('/my-products', getProductsByEmail);
router.post('/add-product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
