const db = require("../db/models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Forum.find(req.query)
      .then(dbForum => res.json(dbForum))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Forum.findById(req.params.id)
      .then(dbForum => res.json(dbForum))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Forum.create(req.body)
      .then(dbForum => res.json(dbForum))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Forum.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbForum => res.json(dbForum))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Forum.findById(req.params.id)
      .then(dbForum => dbForum.remove())
      .then(dbForum => res.json(dbForum))
      .catch(err => res.status(422).json(err));
  }
};
