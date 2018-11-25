const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;
const knexConnection = require('knex')(require('./config/config').development);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

require('./routes')(app, knexConnection);

app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});