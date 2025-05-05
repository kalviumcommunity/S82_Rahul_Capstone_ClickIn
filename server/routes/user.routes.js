import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  otpverify,
  loginUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/add-user', createUser);
router.post('/login',loginUser)
router.post('/otp-verfy',otpverify)
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
export default router;
