import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
dotenv.config();

import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';
import deliveryRoutes from './routes/deliveryPartner.routes.js';
import addressRoutes from './routes/address.routes.js';
import categoryRoutes from './routes/category.routes.js';
import shopkeeperRoutes from './routes/shopKeeper.routes.js';
import userRoutes from './routes/user.routes.js';


const app = express();

app.use(cors());
app.use(express.json());

connectDb();

// Routes with prefixes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/shopkeepers', shopkeeperRoutes);
app.use('/api/users', userRoutes);


// Test route
app.get('/', (req, res) => {
  res.send('Welcome to ClickIn!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
