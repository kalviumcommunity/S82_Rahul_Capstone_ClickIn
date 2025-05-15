import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';


import orderRoutes from './routes/order.routes.js';
import deliveryRoutes from './routes/deliveryPartner.routes.js';
import addressRoutes from './routes/address.routes.js';
import userRoutes from './routes/user.routes.js';
import geminiRoutes from './routes/gemini.routes.js'; 

// Auth and error middleware
import './config/passport.js';
import { authenticateToken } from './src/utils/authUtils.js';

// dotenv
// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// ---------------------------
// Middleware Setup
// ---------------------------

// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// JSON Parsing
app.use(express.json());


connectDb();



app.use('/api/orders', authenticateToken, orderRoutes);
app.use('/api/delivery', authenticateToken, deliveryRoutes);
app.use('/api/addresses', authenticateToken, addressRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/gemini', geminiRoutes);  


app.get('/', (req, res) => {
  res.send('Welcome to ClickIn!');
});





export default app;
