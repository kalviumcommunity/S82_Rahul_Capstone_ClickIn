import express from 'express';
import passport from 'passport';
import upload from '../middleware/multer.js';

import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
  otpverify,
  loginUser,
  googleAuthCallback,
} from '../controllers/user.controller.js';

const router = express.Router();

// 🔒 Auth Routes
router.post('/register', upload.single('profileImage'), createUser);
router.post('/login', loginUser);
router.post('/verify-otp', otpverify);

// 👤 User Management Routes
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/update/:id', upload.single('profileImage'), updateUser);
router.delete('/user/:id', deleteUser);

// 🌐 Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "http://localhost:5173/login" }),
  (req, res, next) => {
    console.log("User object:", req.user);
    next();
  },
  googleAuthCallback
);

export default router;
