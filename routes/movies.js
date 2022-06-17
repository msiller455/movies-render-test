var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies')

// all of our routes are prefixed with /movies because of how they are mounted in the server
router.get('/new', moviesCtrl.new)
router.post('/', moviesCtrl.create)

module.exports = router;
