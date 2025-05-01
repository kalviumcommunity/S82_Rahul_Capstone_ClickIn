import mongoose from 'mongoose';

const connectDb=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`mongoDb connected successfully`)
    }
    catch (error) {
        console.error(' MongoDB connection failed:', error.message);
        process.exit(1); // Exit with failure
      }
    };
    
    export default connectDb;