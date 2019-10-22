const db = require("../models");

const trophyController = {
  findAllTrophies: function (req, res) {
    db.Trophy
      .find(req.query)
      .sort({ date: -1 })
      .then(dbTrophy => res.json(dbTrophy))
      .catch(err => res.status(422).json(err));
  },
  updateTrophy: function (req, res) {
    db.Trophy
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTrophy => res.json(dbTrophy))
      .catch(err => res.status(422).json(err));
  },
};

module.exports=trophyController;