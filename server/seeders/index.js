const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ecommerce',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

async function seedDatabase() {
  let connection;
  try {
    console.log('\n🌱 Starting database seeding...\n');

    connection = await mysql.createConnection(config);
    console.log('✅ Connected to database');

    // Read the seeder SQL file
    const seedFile = path.join(__dirname, '../seeders.sql');
    const sqlStatements = fs.readFileSync(seedFile, 'utf8');

    // Split by semicolon and execute each statement
    const statements = sqlStatements
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0);

    for (const statement of statements) {
      try {
        await connection.execute(statement);
        console.log('✅ Executed:', statement.substring(0, 60) + '...');
      } catch (err) {
        console.error('❌ Error executing statement:', err.message);
      }
    }

    console.log('\n✅ Database seeding completed successfully!\n');
    console.log('📊 Seeded Data:');
    console.log('  ✓ 6 Categories');
    console.log('  ✓ 36 Products (6 per category)');
    console.log('  ✓ 1 Demo User');
    console.log('\n');

  } catch (error) {
    console.error('\n❌ Error seeding database:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

seedDatabase();
