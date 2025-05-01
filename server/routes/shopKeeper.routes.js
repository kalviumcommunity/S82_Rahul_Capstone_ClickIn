import express from 'express';
import {
  getAllShopkeepers,
  getShopkeeperById,
} from '../controllers/shopKeeper.controller.js';

const router = express.Router();

router.get('/shopkeepers', getAllShopkeepers);
router.get('/shopkeeper/:id', getShopkeeperById);


export default router;
