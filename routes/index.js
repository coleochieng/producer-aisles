var express = require('express');
var router = express.Router();
const passport = require('passport');

// Don't want a welcome/home page in this app
router.get('/', function(req, res, next) {
  res.redirect('/producers');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    // Optionally force the user to pick account every time
    prompt: 'select_account'
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/producers',
    failureRedirect: '/producers'
  }
));

// Logout route
router.get('/logout', function(req, res) {
  req.logout(function(err) {
    res.redirect('/producers');
  });
});

module.exports = router;
