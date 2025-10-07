const Contact = require('../db/models/contact');

async function findAll() {
  return Contact.find();
}

async function findById(id) {
  return Contact.findById(id);
}

module.exports = {
  findAll,
  findById
};
