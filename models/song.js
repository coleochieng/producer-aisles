const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

// Reviews (subdocs) will be embedded inside of
// song docs
const reviewSchema = new Schema({
  content: {
    type: String,
    match: /.{10,}/
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  // Automatic createdAt & updatedAt properties
  timestamps: true
});

const songSchema = new Schema({
  title: String,
  releaseYear: {
    type: Number,
    // releaseYear must not exist
    // on req.body
    default: function() {
      // whatever is returned is assigned
      // to releaseYear
      return new Date().getFullYear();
    },
    min: 1927
  },
  
  // The ref property informs Mongoose which Module
  // to use when populating the producerCast property
  producerCast: [{type: Schema.Types.ObjectId, ref: 'Producer'}],
  released: Boolean,
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Song', songSchema);