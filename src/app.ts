import * as Sentry from '@sentry/node';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { config } from './core/config/index.js';
import { rateLimiter } from './api/middlewares/rate-limiter.js';
import contactRoutes from './api/routes/contact.route.js';

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({ origin: config.ALLOWED_ORIGINS }));
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(morgan('dev'));
app.use(rateLimiter);

// API Routes
app.use('/api/contact', contactRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Sentry Error Handler (must be before custom error handlers)
Sentry.setupExpressErrorHandler(app);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
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

export default app;
