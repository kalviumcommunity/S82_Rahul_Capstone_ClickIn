import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/add-user', createUser);


export default router;
