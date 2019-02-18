const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectionDb = require('./config/config').development;
/* for dev mode */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config1 = require('./webpack.config.js');
const compiler = webpack(config1);
/**/
const PORT = 3000;
const knex = require('knex')({
    client: 'mysql',
    connection: connectionDb
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* for dev mode  */
app.use(webpackDevMiddleware(compiler));
/**/
app.use(express.static(path.join(__dirname, 'dist')));
require('./routes')(app, knex, session);

app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});