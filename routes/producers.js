const express = require('express');
const router = express.Router();
const producersCtrl = require('../controllers/producers');

// This router is mounted to a "starts with" path of '/'
router.get('/')
// GET /producers/new
router.get('/new', producersCtrl.new);
// POST /producers
router.post('/', producersCtrl.create);
// POST /movies/:id/producers
router.post('/:id/producers', producersCtrl.addToProducerList);

module.exports = router;