const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./Routes/index');
const bookRoute = require('./Routes/bookRoute');

//
app.use('/', index);
app.use('/books', bookRoute);

module.exports = app;