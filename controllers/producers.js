const Producer = require('../models/producer');

module.exports = {
    //function names
    new: newProducer,
    create,
    index,
    show,
};

//functions

function create(req, res) {
    const producer = new Producer(req.body);
    // Assign the logged in user's id
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    producer.save(function(err) {
      if (err) return res.redirect('/producers/new');
      // Probably want to go to newly added producer's show view
      res.redirect(`/producers/${producer._id}`);
    });
  }
  