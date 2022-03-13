const userController = require('./controllers/user-controller');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: userController.listUsersById,
  },
];
