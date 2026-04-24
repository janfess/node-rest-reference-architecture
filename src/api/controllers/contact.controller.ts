import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { asyncHandler } from '../middlewares/async-handler.js';
import { contactService } from '../services/contact.service.js';
import { AppError } from '../../core/utils/app-error.js';

/**
 * Controller: Handles HTTP requests, performs validation, and delegates logic to services.
 */
export const handleInquiry = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // 2. Delegate to Service Layer
  const result = await contactService.processInquiry({ name, email, message });

  // 3. Return Standardized Response
  return res.status(200).json({
    status: 'success',
    data: result,
    message: 'Inquiry received successfully.'
  });
});
