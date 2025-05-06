import User from '../src/models/user.model.js';
import sendMail from '../util/mail.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const otpStore = new Map();


async function sendOTP(email, otp) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.ADMIN_NAME,
      pass: process.env.ADMIN_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `ClickIn <${process.env.ADMIN_NAME}>`,
    to: email,
    subject: 'Your OTP for Signup in ClickIn',
    text: `Your OTP is: ${otp}. It is valid for 3 minutes.`,
  });
}



// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create user + Send OTP
export const createUser = async (req, res) => {
  const { name, email, password, phone, addresses } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({ name, email, password: hashedPassword, phone, addresses });

    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore.set(email, {
      otp,
      name,
      expiresAt: Date.now() + 3 * 60 * 1000, // 3 minutes
    });

    try {
      await sendOTP(email, otp);
    } catch (e) {
      return res.status(500).json({ message: 'Failed to send OTP', error: e.message });
    }

    await newUser.save();
    res.status(201).json({ message: 'OTP sent to your mail' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Verify OTP
export const otpverify = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  const storedData = otpStore.get(email);

  if (!storedData) {
    return res.status(404).json({ message: 'OTP expired or not requested' });
  }

  if (Date.now() > storedData.expiresAt) {
    otpStore.delete(email);
    return res.status(410).json({ message: 'OTP has expired' });
  }

  if (storedData.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  otpStore.delete(email);

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'Please start signup from beginning' });
  }

  await User.findByIdAndUpdate(user._id, { isActivated: true });
  res.status(200).json({ success: true, message: 'Signup successful' });
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    if (!user.isActivated) {
      return res.status(403).json({ message: 'Please verify your account via OTP' });
    }

    const token = jwt.sign({ id: user._id }, process.env.secret, { expiresIn: '7d' });

    res.cookie('accesstoken', token, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user.' });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user.' });
  }
};
