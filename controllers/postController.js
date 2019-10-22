const db = require("../models");

const postController = {
  findAllPosts: function (req, res) {
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  findPostById: function (req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  createPost: function (req, res) {
    db.Post
      .create(req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  updatePost: function (req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  removePost: function (req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbPost => dbPost.remove())
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  }
};

module.exports=postController;