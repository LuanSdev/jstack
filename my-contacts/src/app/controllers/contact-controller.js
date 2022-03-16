const contactsRepository = require('../repositories/contacts-repository');

class ContactController {
  async index(req, res) {
    const contacts = await contactsRepository.findAll();

    res.json(contacts);
  }
}

module.exports = new ContactController();
