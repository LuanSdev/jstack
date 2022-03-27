const { randomUUID } = require('crypto');

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

  async deleteById(id) {
    contacts = contacts.filter((obj) => obj.id !== id);
  }
}

module.exports = new ContactsRepository();
