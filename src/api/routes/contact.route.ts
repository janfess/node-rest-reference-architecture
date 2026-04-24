import { Router } from 'express';
import { body } from 'express-validator';
import * as contactController from '../controllers/contact.controller.js';
import { validate } from '../middlewares/validation.middleware.js';

const router = Router();

router.post(
  '/',
  [
    body('name').trim().escape().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('message').trim().escape().notEmpty().withMessage('Message is required'),
    body('acceptPolicies').isBoolean().withMessage('Privacy policy must be accepted')
  ],
  validate,
  contactController.handleInquiry
);

export default router;
