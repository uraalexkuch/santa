const express = require("express");
const router = express.Router();
const db = require("./src/db/db");

// start db
db.authenticate()
    .then((result) => {
        console.log("Connection established.");
    })
    .catch((error) => {
        console.log("Unable to connect to db: ", error);
    });

// start app
const app = express();

module.exports = app;