import express from 'express';
import {
  getAllShopkeepers,
  getShopkeeperById,
  createShopKeeper,
  updateShopkeeper,
  deleteShopkeeper
} from '../controllers/shopKeeper.controller.js';

const router = express.Router();

router.get('/shopkeepers', getAllShopkeepers);
router.get('/shopkeeper/:id', getShopkeeperById);
router.post('/add-shopkeeper', createShopKeeper);
router.put('/shopkeeper/:id', updateShopkeeper);
router.delete('/shopkeeper/:id', deleteShopkeeper);
export default router;
