var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/songs');
const isLoggedIn = require('../config/auth');

// All routes "start with" /songs (from server.js)

// GET /songs (index functionality)
router.get('/', songsCtrl.index);
// GET /songs/new (new functionality)
router.get('/new', isLoggedIn, songsCtrl.new);
// GET /songs/:id (show functionality)
router.get('/:id', songsCtrl.show);
// POST /songs (create functionality)
router.post('/', isLoggedIn, songsCtrl.create);

module.exports = router;
