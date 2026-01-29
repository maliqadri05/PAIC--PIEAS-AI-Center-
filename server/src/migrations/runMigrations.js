import { migrations, createDatabaseConnection } from '../config/migrations.js';
import pool from '../config/database.js';

const runMigrations = async () => {
  try {
    console.log('🔄 Starting migrations...');
    
    // First, create database
    const connection = await createDatabaseConnection();
    const dbName = process.env.DB_NAME || 'paic_website';
    
    console.log(`📦 Creating database: ${dbName}...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
    await connection.end();
    
    // Now run migrations using the pool
    for (const migration of migrations) {
      if (migration.name === '001_create_database') {
        console.log(`✅ ${migration.name} - Skipped (already handled)`);
        continue;
      }
      
      console.log(`⏳ Running: ${migration.name}...`);
      try {
        await pool.query(migration.sql);
        console.log(`✅ ${migration.name} - Complete`);
      } catch (error) {
        if (error.code === 'ER_TABLE_EXISTS_ERROR' || error.message.includes('already exists')) {
          console.log(`✅ ${migration.name} - Skipped (already exists)`);
        } else {
          throw error;
        }
      }
    }
    
    console.log('\n✨ All migrations completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
};

runMigrations();
