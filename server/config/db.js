import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); 
  }
}

export default connectDb;
