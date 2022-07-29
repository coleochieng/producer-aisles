const Producer = require('../models/producer');

module.exports = {
  index,
  // show,
  new: newProducer,
  // create
};

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.render('movies/index', { title: 'All Movies', movies });
  });
}

// function show(req, res) {
//   Movie.findById(req.params.id)
//     .populate('cast')
//     .exec(function(err, movie) {
//       Performer.find(
//         {_id: {$nin: movie.cast}},
//         function(err, performers) {
//           res.render('movies/show', {
//             title: 'Movie Detail',
//             movie,
//             performers
//           });
//         }
//       );
//     });
// }

function newProducer(req, res) {
  res.render('producers/new', { title: 'Add Producer' });
}

// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   // remove whitespace next to commas
//   req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//   // split if it's not an empty string
//   if (req.body.cast) req.body.cast = req.body.cast.split(',');
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
  var producer = new Producer(req.body);
  producer.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/producers/new');
    res.redirect(`/producers/${producer._id}`);
  });

