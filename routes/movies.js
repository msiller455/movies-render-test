var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');
const isLoggedIn = require('../config/auth')

router.get('/', moviesCtrl.index);
router.get('/new', isLoggedIn, moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', isLoggedIn, moviesCtrl.create);

module.exports = router;