const { Router } = require('express');
const express = require('express');
const app = express();

// loading .env, if exists
require('dotenv').config({ path: ".env" });

// if .env file doesnt exist, you can give your RapidAPI-Key here 
const myApiKey = process.env.API_KEY || "your-RapidAPI-key";
const port = process.env.PORT || 3000;

const dbRouter = require('./routes/database');
const modelRouter = require('./routes/model');
const entityRouter = require('./routes/entity');

app.use('/get-databases', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, dbRouter);

app.use('/get-models', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, modelRouter);

app.use('/get-entities', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, entityRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})