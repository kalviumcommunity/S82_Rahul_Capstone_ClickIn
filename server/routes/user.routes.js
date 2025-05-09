import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
  otpverify,
  loginUser,
} from '../controllers/user.controller.js';



const router = express.Router();



router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/signup', createUser);
router.post('/login',loginUser)
router.post('/verify-otp',otpverify)
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
export default router;


