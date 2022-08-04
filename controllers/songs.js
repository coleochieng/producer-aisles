const Song = require('../models/song');
const Producer = require('../models/producer');

module.exports = {
  index,
  show,
  new: newSong,
  create
};

function index(req, res) {
  Song.find({}, function(err, songs) {
    res.render('songs/index', { title: 'All Songs', songs });
  });
}

function show(req, res) {
  Song.findById(req.params.id)
    .populate('producerCast')
    .exec(function(err, song) {
      Producer.find(
        {_id: {$nin: song.producerCast}},
        function(err, producers) {
          res.render('songs/show', {
            title: 'Song Production Details',
            song,
            producers
          });
        }
      );
    });
}

function newSong(req, res) {
  res.render('songs/new', { title: 'Add Song' });
}

function create(req, res) {
  // convert Released's checkbox of nothing or "on" to boolean
  req.body.released = !!req.body.released;
  // remove whitespace next to commas
  req.body.producerCast = req.body.producerCast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.producerCast) req.body.producerCast = req.body.producerCast.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var song = new Song (req.body);
  song.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/songs/new');
    res.redirect(`/songs/${song._id}`);
  });
}
