const mongoose = require('mongoose');

// Creation of song collection using mongoose
const SongSchema = new mongoose.Schema({
  title: { type: String },
  artist: { type: String },
  imageUrl: { type: String },
  description: { type: String },
}, { timestamps: true });

module.exports.Song = mongoose.model('Song', SongSchema);