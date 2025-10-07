const express = require('express');
const cors = require('cors');
const pino = require('pino-http');
const contactsRouter = require('./routes/contacts');

function setupServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(pino());

  // routes
  app.use('/contacts', contactsRouter);

  // 404 for missing routes
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
}

module.exports = { setupServer };
