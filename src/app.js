const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
require('dotenv').config();
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/home');
const categoryRoutes = require('./routes/category');
const carRoutes = require('./routes/car');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));
app.use('/', indexRoutes);
app.use('/category', categoryRoutes);
app.use('/car', carRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
    const {status = 500, message = 'Server error'} = err;
    res.status(status).json({ message })
});

module.exports = app;
