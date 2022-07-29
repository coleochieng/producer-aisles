var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies');
const isLoggedIn = require('../config/auth');

// All routes "start with" /movies (from server.js)

// GET /movies (index functionality)
router.get('/', moviesCtrl.index);
// GET /movies/new (new functionality)
router.get('/new', isLoggedIn, moviesCtrl.new);
// GET /movies/:id (show functionality)
router.get('/:id', moviesCtrl.show);
// POST /movies (create functionality)
router.post('/', isLoggedIn, moviesCtrl.create);

module.exports = router;
