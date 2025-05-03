import express from 'express';
import {
  getAllShopkeepers,
  getShopkeeperById,
  createShopKeeper,
  updateShopkeeper
} from '../controllers/shopKeeper.controller.js';

const router = express.Router();

router.get('/shopkeepers', getAllShopkeepers);
router.get('/shopkeeper/:id', getShopkeeperById);
router.post('/add-shopkeeper', createShopKeeper);
router.put('/shopkeeper/:id', updateShopkeeper);

export default router;
