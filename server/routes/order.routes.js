import express from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder
} from '../controllers/order.controller.js';

const router = express.Router();

router.get('/orders', getAllOrders);
router.get('/order/:id', getOrderById);
router.post('/add-order', createOrder);
router.put('/order/:id', updateOrder);

export default router;
