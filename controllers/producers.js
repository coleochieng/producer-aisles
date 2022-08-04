const Producer = require('../models/producer');
const Movie = require('../models/song');

module.exports = {
  new: newProducer,
  create,
  addToProducerList
};

function addToProducerList(req, res) {
  Song.findById(req.params.id, function(err, song) {
    song.cast.push(req.body.producerId);
    song.save(function(err) {
      res.redirect(`/songs/${song._id}`);
    });
  });
}

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  // Alternative solution
  // req.body.born = req.body.born + 'T00:00';
  Producer.create(req.body, function (err, producer) {
    res.redirect('/producers/new');
  });
}

function newProducer(req, res) {
  Producer.find({})
  //Sort performers by their name
  .sort('name')
  .exec(function (err, producers) {
    res.render('producers/new', {
      title: 'Add Producer',
      producers
    });
  });
}