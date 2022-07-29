var express = require('express');
var router = express.Router();
const producersCtrl = require('../controllers/producers');
const isLoggedIn = require('../config/auth');

// All routes "start with" /producer (from server.js)

router.get('/', producersCtrl.index);
// GET /producers/new (new functionality)
//router.get('/new', isLoggedIn, producersCtrl.new);
// GET /producers/:id (show functionality)
//router.get('/:id', producersCtrl.show);
// POST /producers (create functionality)
router.post('/', isLoggedIn, producersCtrl.create);

module.exports = router;
