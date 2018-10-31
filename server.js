const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const session = require("express-session");
const bodyParser = require('body-parser');
const passport = require("./config/passport");
const db = require('./models');

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
        database : 'zw_test'
    }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({ secret: "zxryllcvRay/pass", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, knex);

//список курсо
(async () => {
    try {
        await db.sequelize.sync();
    } catch(e){
        console.log(e);
    }
    app.listen(PORT, () => {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
})();