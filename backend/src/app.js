//* ENV variables
require('dotenv').config();

//** Express
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

//** Swagger
/*
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
*/

//** Routes
const appRoutes = require('./app.routes');

//** parses
app.use(express.json());

//** Hello world test route
app.get('/hello', (req, res) => res.send('Hello World!'));

//**
app.use('/', appRoutes);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));

