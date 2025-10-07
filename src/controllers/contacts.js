const contactsService = require('../services/contacts');

async function getAllContacts(req, res, next) {
  try {
    const contacts = await contactsService.findAll();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts
    });
  } catch (err) {
    next(err);
  }
}

async function getContactById(req, res, next) {
  try {
    const { contactId } = req.params;
    const contact = await contactsService.findById(contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllContacts,
  getContactById
};
