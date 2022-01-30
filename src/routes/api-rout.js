

let router = require('express').Router();
const signUpValidationScheme = require('../validation/signUpValidationScheme');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

const signUpController = require('.././controllers/signUpController');
router.route('/signUp')
     .post( signUpValidationScheme, signUpController);
const shuffleController = require('.././controllers/shuffleController');
router.route('/shuffle')
    .post( shuffleController)
const getUserSanta = require('.././controllers/getUserBySanta');
router.route('/:id')
    .get(getUserSanta)

module.exports = router;
