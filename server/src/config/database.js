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

// Wrapper to mimic mysql2/promise pool interface
const pool = {
  query: async (sql, values) => {
    try {
      const stmt = db.prepare(sql);
      if (values && values.length > 0) {
        return [stmt.all(...values)];
      }
      return [stmt.all()];
    } catch (error) {
      throw error;
    }
  },
  execute: async (sql, values) => {
    try {
      const stmt = db.prepare(sql);
      if (values && values.length > 0) {
        return [stmt.run(...values)];
      }
      return [stmt.run()];
    } catch (error) {
      throw error;
    }
  },
  getConnection: async () => ({
    query: async (sql) => [db.prepare(sql).all()],
    end: async () => {},
  }),
  end: async () => {
    db.close();
  },
};

export default pool;
