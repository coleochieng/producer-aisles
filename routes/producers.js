var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/producers');
const isLoggedIn = require('../config/auth');

// All routes "start with" /movies (from server.js)

// GET /movies (index functionality)
router.get('/', producersCtrl.index);
// GET /movies/new (new functionality)
router.get('/new', isLoggedIn, producersCtrl.new);
// GET /movies/:id (show functionality)
router.get('/:id', producersCtrl.show);
// POST /movies (create functionality)
router.post('/', isLoggedIn, producersCtrl.create);

module.exports = router;
