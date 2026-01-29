import { body, param, query, validationResult } from 'express-validator';

/**
 * Validation middleware for contact form submission
 */
export const validateContactSubmission = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 255 })
    .withMessage('Name must be between 2 and 255 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),
  
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ min: 5, max: 500 })
    .withMessage('Subject must be between 5 and 500 characters'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters'),
];

/**
 * Validation middleware for updating contact status
 */
export const validateStatusUpdate = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Invalid contact ID'),
  
  body('status')
    .isIn(['new', 'read', 'responded', 'archived'])
    .withMessage('Status must be one of: new, read, responded, archived'),
];

/**
 * Validation middleware for updating contact information
 */
export const validateContactUpdate = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Invalid contact ID'),
  
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 255 })
    .withMessage('Name must be between 2 and 255 characters'),
  
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),
  
  body('subject')
    .optional()
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage('Subject must be between 5 and 500 characters'),
  
  body('message')
    .optional()
    .trim()
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters'),
  
  body('status')
    .optional()
    .isIn(['new', 'read', 'responded', 'archived'])
    .withMessage('Status must be one of: new, read, responded, archived'),
];

/**
 * Validation middleware for search query
 */
export const validateSearch = [
  query('q')
    .notEmpty()
    .withMessage('Search term is required')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Search term must be between 2 and 200 characters'),
];

/**
 * Validation middleware for date range
 */
export const validateDateRange = [
  query('startDate')
    .notEmpty()
    .withMessage('Start date is required')
    .isISO8601()
    .withMessage('Start date must be in YYYY-MM-DD format'),
  
  query('endDate')
    .notEmpty()
    .withMessage('End date is required')
    .isISO8601()
    .withMessage('End date must be in YYYY-MM-DD format'),
];

/**
 * Error handling middleware for validation
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};
