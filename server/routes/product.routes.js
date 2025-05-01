import express from 'express';
import {
  getAllProducts,
  getProductById,
  getProductsByEmail,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/get-products', getAllProducts);
router.get('/product/:id', getProductById);
router.get('/my-products', getProductsByEmail);


export default router;
