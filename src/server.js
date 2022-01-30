'use strict';
const express = require('express');
require('dotenv').config();
const db = require("../src/db/db");
const cors = require("cors");
const app = express();
let apiRoutes = require("./routes/api-rout");
db.authenticate()
    .then((result) => {
      console.log("Connection established.");
    })
    .catch((error) => {
      console.log("Unable to connect to db: ", error);
    });
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World with Express'));

app.use(cors()) // Use this after the variable declaration
app.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers: Content-Range");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",'X-Total-Count', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET, PATCH");
        return res.status(200).json({});
    }
    next();
});
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

  app.listen(process.env.PORT || 2225, process.env.HOST || 'localhost', () => {
    console.log('server running');

});
