const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/producers');

// This router is mounted to a "starts with" path of '/'

// GET /producers/new
router.get('/producers/new', performersCtrl.new);
// POST /producers
router.post('/producers', performersCtrl.create);
// POST /movies/:id/producers
router.post('/producers/:id/producers', performersCtrl.addToProducerList);

module.exports = router;