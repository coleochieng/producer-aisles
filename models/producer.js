const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  //account for this feature with MCV/R module edits for producerSchema.spotify
  //spotify: {type: URL, required: true, unique: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Producer', producerSchema);