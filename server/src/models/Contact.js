import { db } from '../config/migrations.js';

class Contact {
  static async create(data) {
    const { name, email, subject, message } = data;

    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, subject, message, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, 'new', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `);

    const result = stmt.run(name, email, subject, message);

    return {
      id: result.lastInsertRowid,
      name,
      email,
      subject,
      message,
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }

  static async findAll(options = {}) {
    const { status, limit = 100, offset = 0, sortBy = 'created_at', order = 'DESC' } = options;

    let query = 'SELECT * FROM contacts WHERE deleted_at IS NULL';
    const params = [];

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    query += ` ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    const stmt = db.prepare(query);
    return stmt.all(...params);
  }

  static async findById(id) {
    const stmt = db.prepare('SELECT * FROM contacts WHERE id = ? AND deleted_at IS NULL');
    return stmt.get(id) || null;
  }

  static async findByEmail(email) {
    const stmt = db.prepare('SELECT * FROM contacts WHERE email = ? AND deleted_at IS NULL');
    return stmt.all(email);
  }

  static async updateStatus(id, status) {
    const validStatuses = ['new', 'read', 'responded', 'archived'];
    if (!validStatuses.includes(status)) {
      throw new Error(`Invalid status: ${status}`);
    }

    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');

    const stmt = db.prepare(`
      UPDATE contacts 
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    stmt.run(status, id);

    return {
      ...contact,
      status,
      updated_at: new Date().toISOString(),
    };
  }

  static async update(id, data) {
    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');

    const updates = [];
    const values = [];

    if (data.name !== undefined) {
      updates.push('name = ?');
      values.push(data.name);
    }
    if (data.email !== undefined) {
      updates.push('email = ?');
      values.push(data.email);
    }
    if (data.subject !== undefined) {
      updates.push('subject = ?');
      values.push(data.subject);
    }
    if (data.message !== undefined) {
      updates.push('message = ?');
      values.push(data.message);
    }
    if (data.status !== undefined) {
      updates.push('status = ?');
      values.push(data.status);
    }

    if (updates.length === 0) {
      return contact;
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id);

    const query = `UPDATE contacts SET ${updates.join(', ')} WHERE id = ?`;
    const stmt = db.prepare(query);
    stmt.run(...values);

    return {
      ...contact,
      ...data,
      updated_at: new Date().toISOString(),
    };
  }

  static async delete(id) {
    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');

    const stmt = db.prepare('UPDATE contacts SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?');
    stmt.run(id);

    return true;
  }

  static async hardDelete(id) {
    const contact = await this.findById(id);
    if (!contact) throw new Error('Contact not found');

    const stmt = db.prepare('DELETE FROM contacts WHERE id = ?');
    stmt.run(id);

    return true;
  }

  static async getStats() {
    const totalStmt = db.prepare('SELECT COUNT(*) as count FROM contacts WHERE deleted_at IS NULL');
    const { count: total } = totalStmt.get();

    const statuses = ['new', 'read', 'responded', 'archived'];
    const stats = { total, days_with_contacts: 0 };

    for (const status of statuses) {
      const stmt = db.prepare(`SELECT COUNT(*) as count FROM contacts WHERE status = ? AND deleted_at IS NULL`);
      const { count } = stmt.get(status);
      stats[`${status}_count`] = count;
    }

    const daysStmt = db.prepare(`
      SELECT COUNT(DISTINCT DATE(created_at)) as count FROM contacts WHERE deleted_at IS NULL
    `);
    const { count: daysCount } = daysStmt.get();
    stats.days_with_contacts = daysCount;

    return stats;
  }

  static async search(searchTerm, options = {}) {
    const { limit = 50, offset = 0 } = options;
    const query = `
      SELECT * FROM contacts 
      WHERE deleted_at IS NULL AND (
        name LIKE ? OR 
        email LIKE ? OR 
        subject LIKE ? OR 
        message LIKE ?
      )
      LIMIT ? OFFSET ?
    `;

    const searchPattern = `%${searchTerm}%`;
    const stmt = db.prepare(query);
    return stmt.all(searchPattern, searchPattern, searchPattern, searchPattern, limit, offset);
  }

  static async findByDateRange(startDate, endDate) {
    const stmt = db.prepare(`
      SELECT * FROM contacts 
      WHERE deleted_at IS NULL AND DATE(created_at) BETWEEN ? AND ?
      ORDER BY created_at DESC
    `);
    return stmt.all(startDate, endDate);
  }
}

export default Contact;