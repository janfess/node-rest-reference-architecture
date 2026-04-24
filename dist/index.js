"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const database_js_1 = require("./core/loaders/database.js");
const index_js_1 = require("./core/config/index.js");
const logger_js_1 = require("./core/utils/logger.js");
const PORT = process.env.PORT || 3000;
// Start Server only after critical loaders (like DB) are ready
const startServer = async () => {
    await (0, database_js_1.connectDatabase)();
    app_js_1.default.listen(index_js_1.config.PORT || PORT, () => {
        logger_js_1.logger.info(`
      ################################################
      🛡️  Server listening on port: ${index_js_1.config.PORT || PORT} 🛡️
      ################################################
    `);
    });
};
startServer();
