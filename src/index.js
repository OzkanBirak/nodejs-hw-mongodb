require('dotenv').config();
const { setupServer } = require('./server');
const initMongoConnection = require('./db/initMongoConnection');

async function start() {
  try {
    await initMongoConnection();
    setupServer();
  } catch (err) {
    console.error('Error starting application', err);
    process.exit(1);
  }
}

start();
