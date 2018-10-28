const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const session = require("express-session");
const bodyParser = require('body-parser');


const config = require('./webpack.config.js');
const compiler = webpack(config);
//pc zw_test
//nout zeroweb
const PORT = 3000;
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'zeroweb'
    }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'dist')));


require('./routes')(app, knex);

//список курсо

app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
