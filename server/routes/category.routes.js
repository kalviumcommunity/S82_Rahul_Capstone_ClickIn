import express from 'express';
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory
} from '../controllers/category.controller.js';

const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/category/:id', getCategoryById);
router.post('/add-category', createCategory);
router.put('/category/:id', updateCategory);
export default router;
