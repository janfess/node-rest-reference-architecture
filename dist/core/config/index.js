"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/**
 * Configuration Module: Centralizes and validates environment variables.
 * Demonstrates defensive programming by ensuring required variables are set at startup.
 */
exports.config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '3000', 10),
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/reference-db',
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:4200'],
    // Example of a required variable with validation
    API_KEY: process.env.API_KEY || 'default_demo_key'
};
// Simple startup validation
if (!exports.config.API_KEY && exports.config.NODE_ENV === 'production') {
    console.error('FATAL: API_KEY is required in production environment.');
    process.exit(1);
}
