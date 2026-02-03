import { migrations, createDatabaseConnection, db } from '../config/migrations.js';

const runMigrations = async () => {
  try {
    console.log('🔄 Starting migrations...');
    
    // For SQLite, migrations are simpler
    for (const migration of migrations) {
      if (migration.name === '001_create_database') {
        console.log(`✅ ${migration.name} - Configuring SQLite...`);
        db.exec(migration.sql);
        continue;
      }

      if (migration.name === '003_create_contacts_indexes') {
        console.log(`⏳ Running: ${migration.name}...`);
        try {
          const statements = migration.sql.split(';').filter((s) => s.trim());
          for (const stmt of statements) {
            if (stmt.trim()) {
              db.exec(stmt);
            }
          }
          console.log(`✅ ${migration.name} - Complete`);
        } catch (error) {
          if (error.message.includes('already exists')) {
            console.log(`✅ ${migration.name} - Skipped (already exists)`);
          } else {
            throw error;
          }
        }
        continue;
      }

      console.log(`⏳ Running: ${migration.name}...`);
      try {
        db.exec(migration.sql);
        console.log(`✅ ${migration.name} - Complete`);
      } catch (error) {
        if (error.message.includes('already exists')) {
          console.log(`✅ ${migration.name} - Skipped (already exists)`);
        } else {
          throw error;
        }
      }
    }

    console.log('\n✨ All migrations completed successfully!');
    console.log('📁 Database file: paic_website.db');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
};

runMigrations();
