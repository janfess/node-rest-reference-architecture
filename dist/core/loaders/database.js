"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_js_1 = require("../config/index.js");
const logger_js_1 = require("../utils/logger.js");
/**
 * Database Loader:
 * Handles the connection to MongoDB using Mongoose.
 * Centralizing this in a loader allows for better startup orchestration.
 */
const connectDatabase = async () => {
    try {
        const connection = await mongoose_1.default.connect(index_js_1.config.MONGODB_URI);
        logger_js_1.logger.info(`Successfully connected to MongoDB: ${connection.connection.host}`);
    }
    catch (error) {
        logger_js_1.logger.error('Error connecting to MongoDB:', error);
        // In a critical failure, we might want to exit the process
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
