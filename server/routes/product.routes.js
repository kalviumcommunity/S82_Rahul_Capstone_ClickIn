import express from 'express';
import {
  getAllProducts,
  getProductById,
  getProductsByEmail,
  createProduct
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/get-products', getAllProducts);
router.get('/product/:id', getProductById);
router.get('/my-products', getProductsByEmail);
router.post('/add-product', createProduct);


export default router;
