const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectionDb = require('./config/config').development;
const PORT = 3000;
const knex = require('knex')({
    client: 'mysql',
    connection: connectionDb
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

require('./routes')(app, knex);

app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});