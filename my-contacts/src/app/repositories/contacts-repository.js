const { randomUUID } = require('crypto');

const db = require('../../database');

let contacts = [
  {
    id: randomUUID(),
    name: 'luan',
    email: 'luang@gmail.com',
    phone: '11111111',
    category_id: randomUUID(),
  },
];
class ContactsRepository {
  async findAll() {
    return contacts;
  }

  async findById(id) {
    const contact = contacts.find((obj) => obj.id === id);

    return contact;
  }

  async findByName(name) {
    const query = 'SELECT * FROM contacts WHERE name = $1';

    const [contact] = await db.makeQuery(query, [name]);

    return contact;
  }

  async deleteById(id) {
    contacts = contacts.filter((obj) => obj.id !== id);
  }

  async create({ name, email, phone, category_id }) {
    const query = `
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
  `;

    const [row] = await db.makeQuery(query, [name, email, phone, category_id]);

    return row;
  }
}

module.exports = new ContactsRepository();
