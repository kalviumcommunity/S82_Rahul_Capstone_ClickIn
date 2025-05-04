import express from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
} from '../controllers/order.controller.js';

const router = express.Router();

router.get('/orders', getAllOrders);
router.get('/order/:id', getOrderById);
router.post('/add-order', createOrder);
router.put('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);
export default router;
