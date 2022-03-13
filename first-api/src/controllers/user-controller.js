const users = require('../mocks/users');

module.exports = {
  listUsers(req, res) {
    res.writeHead(200, {
      'content-type': 'application/json',
    });

    res.end(JSON.stringify(users));
  },
};
