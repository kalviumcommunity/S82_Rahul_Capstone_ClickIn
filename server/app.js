import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';

import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';
import deliveryRoutes from './routes/deliveryPartner.routes.js';
import addressRoutes from './routes/address.routes.js';
import categoryRoutes from './routes/category.routes.js';
import shopkeeperRoutes from './routes/shopKeeper.routes.js';
import userRoutes from './routes/user.routes.js';
import './config/passport.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/shopkeepers', shopkeeperRoutes);
app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to ClickIn!');
});

export default app;
