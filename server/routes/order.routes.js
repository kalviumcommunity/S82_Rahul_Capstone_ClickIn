import express from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder
} from '../controllers/order.controller.js';

const router = express.Router();

router.get('/orders', getAllOrders);
router.get('/order/:id', getOrderById);
router.post('/add-order', createOrder);


export default router;
