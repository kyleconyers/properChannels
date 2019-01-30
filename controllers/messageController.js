const db = require("../db/models");

// Defining methods for the messageController
module.exports = {
  findAll: function(req, res) {
    db.Message.find(req.query)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Message.findById(req.params.id)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Message.create(req.body)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Message.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Message.findById(req.params.id)
      .then(dbMessage => dbMessage.remove())
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  }
};
