const Joi = require('joi');
const express = require('express');

const app = express();
const fs = require('fs');

app.use(express.json());

const routes = require('./routes/routes.js')(app, fs, Joi);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});