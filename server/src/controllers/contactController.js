import { validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

/**
 * Submit a new contact form
 * POST /api/contacts
 */
export const submitContact = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    // Create new contact
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Contact submitted successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact',
      error: error.message,
    });
  }
};

/**
 * Get all contacts (Admin)
 * GET /api/contacts
 */
export const getAllContacts = async (req, res) => {
  try {
    const { status, limit = 100, offset = 0, sortBy = 'created_at', order = 'DESC' } = req.query;

    const options = {
      limit: parseInt(limit),
      offset: parseInt(offset),
      sortBy,
      order: order.toUpperCase(),
    };

    if (status) {
      options.status = status;
    }

    const contacts = await Contact.findAll(options);
    const stats = await Contact.getStats();

    res.status(200).json({
      success: true,
      message: 'Contacts retrieved successfully',
      data: contacts,
      stats,
      pagination: {
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: error.message,
    });
  }
};

/**
 * Get a single contact by ID (Admin)
 * GET /api/contacts/:id
 */
export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact retrieved successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact',
      error: error.message,
    });
  }
};

/**
 * Get contacts by email (Admin)
 * GET /api/contacts/email/:email
 */
export const getContactsByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const contacts = await Contact.findByEmail(email);

    res.status(200).json({
      success: true,
      message: 'Contacts retrieved successfully',
      data: contacts,
      count: contacts.length,
    });
  } catch (error) {
    console.error('Error fetching contacts by email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: error.message,
    });
  }
};

/**
 * Update contact status (Admin)
 * PATCH /api/contacts/:id/status
 */
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required',
      });
    }

    const contact = await Contact.updateStatus(id, status);

    res.status(200).json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update contact information (Admin)
 * PUT /api/contacts/:id
 */
export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, subject, message, status } = req.body;

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (subject !== undefined) updateData.subject = subject;
    if (message !== undefined) updateData.message = message;
    if (status !== undefined) updateData.status = status;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No fields to update',
      });
    }

    const contact = await Contact.update(id, updateData);

    res.status(200).json({
      success: true,
      message: 'Contact updated successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete a contact (Soft delete - Admin)
 * DELETE /api/contacts/:id
 */
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await Contact.delete(id);

    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Permanently delete a contact (Hard delete - Admin only)
 * DELETE /api/contacts/:id/permanent
 */
export const permanentlyDeleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await Contact.hardDelete(id);

    res.status(200).json({
      success: true,
      message: 'Contact permanently deleted',
    });
  } catch (error) {
    console.error('Error permanently deleting contact:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Search contacts (Admin)
 * GET /api/contacts/search?q=term
 */
export const searchContacts = async (req, res) => {
  try {
    const { q, limit = 50, offset = 0 } = req.query;

    if (!q || q.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Search term is required',
      });
    }

    const contacts = await Contact.search(q, {
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.status(200).json({
      success: true,
      message: 'Search completed successfully',
      data: contacts,
      count: contacts.length,
    });
  } catch (error) {
    console.error('Error searching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search contacts',
      error: error.message,
    });
  }
};

/**
 * Get contacts by date range (Admin)
 * GET /api/contacts/date-range?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
 */
export const getContactsByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({
        success: false,
        message: 'Both startDate and endDate are required',
      });
    }

    const contacts = await Contact.findByDateRange(startDate, endDate);

    res.status(200).json({
      success: true,
      message: 'Contacts retrieved successfully',
      data: contacts,
      count: contacts.length,
      dateRange: { startDate, endDate },
    });
  } catch (error) {
    console.error('Error fetching contacts by date range:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: error.message,
    });
  }
};

/**
 * Get contact statistics (Admin)
 * GET /api/contacts/stats
 */
export const getContactStats = async (req, res) => {
  try {
    const stats = await Contact.getStats();

    res.status(200).json({
      success: true,
      message: 'Statistics retrieved successfully',
      data: stats,
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics',
      error: error.message,
    });
  }
};
