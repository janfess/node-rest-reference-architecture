import { Request, Response, NextFunction } from 'express';

/**
 * Higher-order function to wrap async express routes.
 * Eliminates the need for repetitive try-catch blocks in controllers.
 */
export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
