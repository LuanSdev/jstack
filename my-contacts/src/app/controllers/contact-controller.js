const contactsRepository = require('../repositories/contacts-repository');

class ContactController {
  async index(req, res) {
    const contacts = await contactsRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;

    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found.' });
    }

    await contactsRepository.deleteById(id);

    res.sendStatus(204);
  }
}

module.exports = new ContactController();
