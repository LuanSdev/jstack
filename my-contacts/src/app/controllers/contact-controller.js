class ContactController {
  index(req, res) {
    res.send('pimba');
  }
}

module.exports = new ContactController();
