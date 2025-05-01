import express from 'express';
import {
  getAllCategories,
  getCategoryById,
} from '../controllers/category.controller.js';

const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/category/:id', getCategoryById);

export default router;
