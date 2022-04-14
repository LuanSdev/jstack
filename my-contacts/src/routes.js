const { Router } = require('express');

const contactController = require('./app/controllers/contact-controller');

const router = Router();

router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);
router.delete('/contacts/:id', contactController.delete);
router.post('/contacts', contactController.create);

module.exports = router;
