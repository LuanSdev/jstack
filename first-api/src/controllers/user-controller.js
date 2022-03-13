const users = require('../mocks/users');

module.exports = {
  listUsers(req, res) {
    const { order } = req.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });

    res.send(200, sortedUsers);
  },

  listUsersById(req, res) {
    const { id } = req.params;

    const filteredUser = users.find((user) => user.id == Number(id));

    if (!filteredUser) {
      return res.send(400, { error: 'User not found' });
    }

    res.send(200, filteredUser);
  },
};
