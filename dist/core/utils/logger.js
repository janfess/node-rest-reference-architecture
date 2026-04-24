"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
/**
 * Logger Utility:
 * Provides a standardized logging interface.
 * Enterprise applications typically use Winston or Bunyan for JSON logging
 * and log rotation, integrated with ELK or Datadog.
 */
exports.logger = {
    info: (message, meta) => {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`, meta || '');
    },
    error: (message, error) => {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || '');
    },
    warn: (message, meta) => {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, meta || '');
    }
};
