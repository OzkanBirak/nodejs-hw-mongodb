// src/index.js
import 'dotenv/config';
import { setupServer } from './server.js';
import initMongoConnection from './db/initMongoConnection.js'; // default import

async function start() {
  try {
    await initMongoConnection(); // Initialize MongoDB connection
    setupServer();               // Start the Express server
  } catch (err) {
    console.error('Error starting application:', err);
    process.exit(1);
  }
}

start();
