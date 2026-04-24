import mongoose from 'mongoose';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

/**
 * Database Loader:
 * Handles the connection to MongoDB using Mongoose.
 * Centralizing this in a loader allows for better startup orchestration.
 */
export const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(config.MONGODB_URI);
    logger.info(`Successfully connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error);
    // In a critical failure, we might want to exit the process
    process.exit(1);
  }
};
