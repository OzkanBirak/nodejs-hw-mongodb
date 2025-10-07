require('dotenv').config();
const fs = require('fs');
const path = require('path');
const initMongoConnection = require('../db/initMongoConnection');
const Contact = require('../db/models/contact');

async function seed() {
  try {
    await initMongoConnection();

    const file = path.join(__dirname, '../../contacts.json');
    const raw = fs.readFileSync(file, 'utf8');
    const contacts = JSON.parse(raw);

    // temizle + ekle
    await Contact.deleteMany({});
    const inserted = await Contact.insertMany(contacts);

    console.log(`Inserted ${inserted.length} contacts`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();
