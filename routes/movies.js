var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies')

router.get('/new', moviesCtrl.new)

module.exports = router;
