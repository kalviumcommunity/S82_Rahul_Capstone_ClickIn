import express from 'express';
import {
  getAllUsers,
  getUserById,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);


export default router;
