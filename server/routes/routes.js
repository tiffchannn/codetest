const controller = require('../controllers/controller');

module.exports = function(app){
    app.get('/api', controller.index);
    app.post('/api/song', controller.createSong);
    app.get('/api/song', controller.findAllSongs);
    app.get('/api/song/:id', controller.findOneSong);
    app.delete('/api/song/:id', controller.deleteSong)
}