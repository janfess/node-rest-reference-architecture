/**
 * Global Test Setup:
 * Executed before all tests. Useful for setting up test databases
 * or global environment variables.
 */
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI = 'mongodb://localhost:27017/test-db';
process.env.API_KEY = 'test_key';
