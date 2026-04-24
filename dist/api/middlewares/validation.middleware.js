"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const app_error_js_1 = require("../../core/utils/app-error.js");
/**
 * Generic Validation Middleware:
 * Checks for express-validator errors and throws a standardized AppError.
 */
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    // Format the errors into a readable string or pass the array to the error handler
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.type === 'field' ? err.path : 'unknown']: err.msg }));
    throw new app_error_js_1.AppError('Validation Error', 422);
};
exports.validate = validate;
