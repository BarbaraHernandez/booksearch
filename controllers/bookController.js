const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Book.find({})
    .then(function(dbBook){
      res.json(dbBook);
    })
    .catch(function(err) {
      res.json(err);
    });
  },
  create: function(req, res) {
    db.Book.create(req.body)
    .then(function(dbBook) {
      res.json(dbBook);
    })
    .catch(function(err){
      res.json(err);
    });
  },
  remove: function(req, res) {
    db.Book.drop({ _id: req.params.id })
    .then(function(dbBook){
      res.json(dbBook);
    })
    .catch(function(err){
      res.json(err);
    });
  }
};
