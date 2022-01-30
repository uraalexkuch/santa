'use strict';
const db = require('../models');
//const User = require("../models/user");
//const Wish = require("../models/wish");
const { validationResult } = require('express-validator');
const { MAX_PLAYERS_NUMBER } = require('../config/config');

const signUpController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({status: 'fail', errors: errors.array()});
  }
  db.User.get(function (err, user) {
      if (err) {
        res.json({
          status: 'fail',
          message: err.message,
        });
      }
      else if (user.length >= MAX_PLAYERS_NUMBER) {
         new Error(
            `Maximum number of players (${MAX_PLAYERS_NUMBER}) reached`
        )
    }
    }
    );
  const user = new User();
  user.name = req.body.name;
  user.surname = req.body.surname;
  await db.User.create(user).then(() => {
    db.Wish.create({
      name: req.body.name,
      UserId: req.user.id,
    }).then(function(dbWishlist) {
      res.json(dbWishlist);
    });
    res.sendStatus(200).json({ status: 'success', result: req.body });
  });

};

module.exports = signUpController;
