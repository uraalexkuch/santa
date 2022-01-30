'use strict';

const PREFIX = '/api/';
const MIN_PLAYERS_NUMBER = 3;
const MAX_PLAYERS_NUMBER = 500;
const MAX_WISHES_NUMBER = 10;



    module.exports = {
        MIN_PLAYERS_NUMBER,
        MAX_PLAYERS_NUMBER,
        MAX_WISHES_NUMBER,
        development: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            host: process.env.DB_HOST,
            port: 3306,
            dialect: 'sqlite',
        },

        production: {
            use_env_variable: 'JAWSDB_URL',
            dialect: 'sqlite',
        },






};