import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

/**
 * Initializes Sentry for error tracking and performance profiling.
 * Only activates if SENTRY_DSN is provided in the configuration.
 */
export const initSentry = () => {
  if (!config.SENTRY_DSN) {
    logger.info('Sentry DSN not found, skipping Sentry initialization.');
    return;
  }

  Sentry.init({
    dsn: config.SENTRY_DSN,
    environment: config.NODE_ENV,
    integrations: [
      nodeProfilingIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
  });

  logger.info('🛡️  Sentry initialized successfully for professional monitoring.');
};
