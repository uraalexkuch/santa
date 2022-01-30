'use strict';
const db = require('../models');

const shuffleArray = require('../utils/shuffleArray');
const { MIN_PLAYERS_NUMBER } = require('../config/config');
//const User = require("../models/user");
// Wish = require("../models/wish");
const shuffleController = (req, res) => {

  db.User.get(function (err, user) {
       if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    else if (user.length < MIN_PLAYERS_NUMBER) {
       new Error(
          `The number of players must be at least ${MIN_PLAYERS_NUMBER}`
      );
    }
    const idArr = shuffleArray(user);
    function insertSantaUserPair(err, santasArr, callback) {
          }
    insertSantaUserPair(err, { user, idArr  }, callback)
    {
      try {
        for (let i = 0; i < user.length; i++) {
          db.Wish.set({
              name: user[i],
              UserId: idArr[i],
            }).then(function(dbWishlist) {
              res.json(dbWishlist);
            });
            res.sendStatus(200).json({ status: 'success' });
               }
      } catch (e) {
        err = e;
      } finally {
        callback(err);
      }
    }

});
};
module.exports = shuffleController;
