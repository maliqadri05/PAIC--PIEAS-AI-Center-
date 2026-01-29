// In-memory storage
const memoryStore = {
  contacts: [],
  nextId: 1,
};

class Contact {
  static async create(data) {
    const { name, email, subject, message } = data;
    
    const contact = {
      id: memoryStore.nextId++,
      name,
      email,
      subject,
      message,
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    memoryStore.contacts.push(contact);
    return contact;
  }

  static async findAll(options = {}) {
    const { status, limit = 100, offset = 0 } = options;
    let result = memoryStore.contacts;
    
    if (status) {
      result = result.filter(c => c.status === status);
    }
    
    return result.slice(offset, offset + limit);
  }

  static async findById(id) {
    return memoryStore.contacts.find(c => c.id === Number(id)) || null;
  }

  static async findByEmail(email) {
    return memoryStore.contacts.filter(c => c.email === email);
  }

  static async updateStatus(id, status) {
    const validStatuses = ['new', 'read', 'responded', 'archived'];
    if (!validStatuses.includes(status)) {
      throw new Error(`Invalid status: ${status}`);
    }
    
    const contact = memoryStore.contacts.find(c => c.id === Number(id));
    if (!contact) throw new Error('Contact not found');
    
    contact.status = status;
    contact.updated_at = new Date().toISOString();
    return contact;
  }

  static async update(id, data) {
    const contact = memoryStore.contacts.find(c => c.id === Number(id));
    if (!contact) throw new Error('Contact not found');
    
    Object.assign(contact, { ...data, updated_at: new Date().toISOString() });
    return contact;
  }

  static async delete(id) {
    const index = memoryStore.contacts.findIndex(c => c.id === Number(id));
    if (index === -1) throw new Error('Contact not found');
    memoryStore.contacts.splice(index, 1);
    return true;
  }

  static async hardDelete(id) {
    return this.delete(id);
  }

  static async getStats() {
    const total = memoryStore.contacts.length;
    return {
      total,
      new_count: memoryStore.contacts.filter(c => c.status === 'new').length,
      read_count: memoryStore.contacts.filter(c => c.status === 'read').length,
      responded_count: memoryStore.contacts.filter(c => c.status === 'responded').length,
      archived_count: memoryStore.contacts.filter(c => c.status === 'archived').length,
      days_with_contacts: new Set(memoryStore.contacts.map(c => c.created_at.split('T')[0])).size,
    };
  }

  static async search(searchTerm, options = {}) {
    const { limit = 50, offset = 0 } = options;
    const results = memoryStore.contacts.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return results.slice(offset, offset + limit);
  }

  static async findByDateRange(startDate, endDate) {
    return memoryStore.contacts.filter(c => {
      const date = c.created_at.split('T')[0];
      return date >= startDate && date <= endDate;
    });
  }
}

export default Contact;