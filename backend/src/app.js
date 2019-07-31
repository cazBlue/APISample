//* ENV variables
require('dotenv').config();

//** Express
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

//** Routes
const appRoutes = require('./app.routes');

//** Hello world test route
app.get('/hello', (req, res) => res.send('Hello World!'));

//**
app.use('/', appRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

