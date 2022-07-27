const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: {
    type: String,
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}); 

const producerSchema = new Schema({
  name: String,
  recordLabels: String,
  numberOfGrammyNominations: Number,
  songsListed: Number,
  image: String,
  reviews: [reviewSchema],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
});




    


module.exports = mongoose.model('Producers', producerSchema);