const db = require("../models");

const userController = {
  findAllUsers: function (req, res) {
    db.User.find(req.query)
      .sort({})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findUserById: function (req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findUserByEmail: function (req, res) {
    db.User.findOne({ email: req.params.email })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  createUser: function (req, res) {
    console.log("hello world");
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ email: req.query.email }, {$push: {posts:req.body}})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  updateUserT: function (req, res) {
    db.User.findOneAndUpdate({ email: req.query.email }, {$push: {trophies:req.body}})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = userController;
