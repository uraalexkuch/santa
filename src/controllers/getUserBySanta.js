'use strict';
const db = require('../models');
const User = require("../models/user");
const { sequelize } = require('../../data/santa.sqlite3');
const getUserBySanta =
    async (req, res) => {
        try {
            await sequelize.sync();
            const user = await User.findOne(
                {
                    where: {
                        id: req.params.id
                    },
                    include: [
                        {
                            model: [db.Wish],
                        },
                    ],
               }
            ).then(function(dbWish) {
                res.json(dbWish);
            });
            if (user) {
                res.json({ success: true, data: user }).status(200);
            } else {
                res.json({ success: false, message: 'Failed to find user' }).status(404);
            }

        } catch (e) {
            console.log(e);
            res.json({ success: false, message: 'Failed to find user' }).status(500);
        }
    };


module.exports = getUserBySanta;
