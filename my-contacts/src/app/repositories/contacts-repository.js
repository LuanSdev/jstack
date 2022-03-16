const { randomUUID } = require('crypto');

const contacts = [
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
}

module.exports = new ContactsRepository();
