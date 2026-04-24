import { initSentry } from './core/loaders/sentry.js';
initSentry();

import app from './app.js';
import { connectDatabase } from './core/loaders/database.js';
import { config } from './core/config/index.js';
import { logger } from './core/utils/logger.js';

const PORT = process.env.PORT || 3000;

// Start Server only after critical loaders (like DB) are ready
const startServer = async () => {
  await connectDatabase();

  app.listen(config.PORT || PORT, () => {
    logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.PORT || PORT} 🛡️
      ################################################
    `);
  });
};

startServer();
