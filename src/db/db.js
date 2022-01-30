const Sequelize = require("sequelize");

const db = new Sequelize({
    dialect: "sqlite",
    storage: `${__dirname}/../../data/santa.sqlite3`,

});

module.exports = db;