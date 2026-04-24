import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { AppError } from '../../core/utils/app-error.js';

/**
 * Generic Validation Middleware:
 * Checks for express-validator errors and throws a standardized AppError.
 */
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  // Format the errors into a readable string or pass the array to the error handler
  const extractedErrors: any[] = [];
  errors.array().map(err => extractedErrors.push({ [err.type === 'field' ? err.path : 'unknown']: err.msg }));

  throw new AppError('Validation Error', 422);
};
