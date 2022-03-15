const { Router } = require('express');

const contactController = require('./app/controllers/contact-controller');

const router = Router();

router.get('/contacts', contactController.index);

module.exports = router;
