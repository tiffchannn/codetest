const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/routes')(app);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })

// Port connection for Heroku deployment
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () => {
    console.log("Listening at Port 8000")
})
