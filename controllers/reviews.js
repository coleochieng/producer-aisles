const Song = require('../models/song');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res, next) {
  try {
    const song = await Song.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
    if (!song) throw new Error('Nice Try!');
    // Remove the review using the remove method on Mongoose arrays
    song.reviews.remove(req.params.id);
    await song.save();
    res.redirect(`/songs/${song._id}`);
  } catch (err) {
    return next(err);
  }
}

function create(req, res) {
  // The new review will be embedded in the song doc
  Song.findById(req.params.id, function(err, song) {
    // Mongoose arrays have everything that JS arrays
    // have, and more!

    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    song.reviews.push(req.body);
    song.save(function(err) {
      // Step 5: Data has been changed
      // so we redirect
      res.redirect(`/songs/${song._id}`);
    });
  });
}