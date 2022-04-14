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

  async create(req, res) {
    const { name, email, phone, category_id } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Invalid contact data.' });
    }

    const contactAlreadyExists = await contactsRepository.findByName(name);

    if (contactAlreadyExists) {
      return res.json({ error: 'Contact already exists.' });
    }

    await contactsRepository.create({ name, email, phone, category_id });

    res.sendStatus(200);
  }
}

module.exports = new ContactController();
