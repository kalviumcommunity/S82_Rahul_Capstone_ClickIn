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
import passport from 'passport';
import { googleAuthCallback } from '../controllers/user.controller.js';



const router = express.Router();



router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/signup', createUser);
router.post('/login',loginUser)
router.post('/verify-otp',otpverify)
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"]   }));

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "http://localhost:5173/login" }),
  // <-- add this middleware to log req.user
  (req, res, next) => {
    console.log("User object:", req.user);
    next();
  },
  googleAuthCallback
);

export default router;


