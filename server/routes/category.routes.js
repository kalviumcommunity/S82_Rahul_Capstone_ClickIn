import express from 'express';
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controllers/category.controller.js';

const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/category/:id', getCategoryById);
router.post('/add-category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
export default router;
