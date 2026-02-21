const fs = require('fs');
const path = require('path');
const pool = require('../config/db');

const PARTS_DIR = path.join(__dirname, '../assets/parts');

async function seed() {
  // Only keep _inst_0 variants (one representative per part), skip higher instance numbers
  const files = fs.readdirSync(PARTS_DIR)
    .filter(f => f.endsWith('.glb'))
    .filter(f => !/_inst_\d+/.test(f) || /_inst_0/.test(f));

  if (files.length === 0) {
    console.log('No GLB files found in assets/parts/');
    process.exit(0);
  }

  console.log(`Found ${files.length} GLB file(s):`, files);

  await pool.query('TRUNCATE parts');
  console.log('Truncated parts table');

  for (const file of files) {
    const name = file.replace(/^SM_/, '').replace(/_inst_\d+/, '').replace(/\.glb$/i, '');
    await pool.query(
      'INSERT INTO parts (id, name, description) VALUES ($1, $2, $3)',
      [file, name, 'Placeholder description']
    );
    console.log(`Inserted: ${file}`);
  }

  console.log('Seed complete');
  process.exit(0);
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
