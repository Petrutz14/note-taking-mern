//Connects to the database
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully!');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); //Exit process with failure
    }

};