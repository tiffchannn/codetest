const { Song } = require('../models/model')

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

// Create Song
module.exports.createSong = (req, res) => {
  console.log("request: ", req)
  Song.create(req.body)
    .then(song => res.json(song))
    .catch(err => res.json(err))
}

// Find all Songs
module.exports.findAllSongs = (req, res) => {
  Song.find({})
  .then(allSongs => res.json(allSongs))
  .catch(err => res.json(err))}


// Find ONE Song
module.exports.findOneSong = (req, res) => {
  Song.findOne({_id: req.params.id})
    .then(oneSong => res.json(oneSong))
    .catch(err => res.json(err))
}

// Delete Song
module.exports.deleteSong = (req, res) => {
  Song.deleteOne({_id: req.params.id})
    .then(deletedSong => res.json(deletedSong))
    .catch(err => res.json(err))
}
