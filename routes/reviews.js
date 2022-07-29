const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// The starts with path is '/'

// POST /movies/:id/reviews
router.post('/producers/:id/reviews', reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;