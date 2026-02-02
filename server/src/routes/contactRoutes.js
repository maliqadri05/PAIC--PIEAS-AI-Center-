import express from 'express';
import * as contactController from '../controllers/contactController.js';
import {
  validateContactSubmission,
  validateStatusUpdate,
  validateContactUpdate,
  validateSearch,
  validateDateRange,
  handleValidationErrors,
} from '../middleware/validators.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

/**
 * PUBLIC ROUTES
 */

// Submit a new contact form (public) - protected by rate limiter
router.post('/submit', contactLimiter, validateContactSubmission, handleValidationErrors, contactController.submitContact);

/**
 * ADMIN ROUTES
 * Note: In production, add authentication middleware to protect these routes
 */

// Get all contacts with stats
router.get('/admin/contacts', contactController.getAllContacts);

// Get contact statistics
router.get('/admin/stats', contactController.getContactStats);

// Search contacts
router.get('/admin/search', validateSearch, handleValidationErrors, contactController.searchContacts);

// Get contacts by date range
router.get('/admin/date-range', validateDateRange, handleValidationErrors, contactController.getContactsByDateRange);

// Get a single contact by ID
router.get('/admin/contacts/:id', contactController.getContactById);

// Get contacts by email
router.get('/admin/contacts/email/:email', contactController.getContactsByEmail);

// Update contact status
router.patch('/admin/contacts/:id/status', validateStatusUpdate, handleValidationErrors, contactController.updateContactStatus);

// Update contact information
router.put('/admin/contacts/:id', validateContactUpdate, handleValidationErrors, contactController.updateContact);

// Soft delete a contact
router.delete('/admin/contacts/:id', contactController.deleteContact);

// Permanently delete a contact
router.delete('/admin/contacts/:id/permanent', contactController.permanentlyDeleteContact);

export default router;
