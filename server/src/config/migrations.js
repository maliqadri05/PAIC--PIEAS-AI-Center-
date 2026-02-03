import Database from 'better-sqlite3';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../../paic_website.db');

// Create/open SQLite database
const db = new Database(dbPath);

// Create a connection object that mimics mysql2/promise
const createDatabaseConnection = async () => {
  return {
    query: async (sql, values) => {
      const stmt = db.prepare(sql);
      if (values) {
        return [stmt.all(...values)];
      }
      return [stmt.all()];
    },
    execute: async (sql, values) => {
      const stmt = db.prepare(sql);
      if (values) {
        return [stmt.run(...values)];
      }
      return [stmt.run()];
    },
    end: async () => {
      // In SQLite, no need to close for each query
    },
  };
};

// SQL migrations for SQLite
const migrations = [
  {
    name: '001_create_database',
    sql: `PRAGMA journal_mode=WAL;`, // Enable WAL mode for better concurrency
  },
  {
    name: '002_create_contacts_table',
    sql: `
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT DEFAULT 'new' CHECK(status IN ('new', 'read', 'responded', 'archived')),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        deleted_at DATETIME NULL
      );
    `,
  },
  {
    name: '003_create_contacts_indexes',
    sql: `
      CREATE INDEX IF NOT EXISTS idx_email ON contacts(email);
      CREATE INDEX IF NOT EXISTS idx_status ON contacts(status);
      CREATE INDEX IF NOT EXISTS idx_created_at ON contacts(created_at);
    `,
  },
];

export { migrations, createDatabaseConnection, db };
