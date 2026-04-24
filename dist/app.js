"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = require("./core/config/index.js");
const rate_limiter_js_1 = require("./api/middlewares/rate-limiter.js");
const contact_route_js_1 = __importDefault(require("./api/routes/contact.route.js"));
const app = (0, express_1.default)();
// Security Middleware
// Middleware Stack
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: index_js_1.config.ALLOWED_ORIGINS }));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json({ limit: '10kb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
app.use((0, morgan_1.default)('dev'));
app.use(rate_limiter_js_1.rateLimiter);
// API Routes
app.use('/api/contact', contact_route_js_1.default);
// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
// Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';
    // For production, only leak operational errors
    if (process.env.NODE_ENV === 'production' && !err.isOperational) {
        return res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!'
        });
    }
    res.status(statusCode).json({
        status,
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});
exports.default = app;
