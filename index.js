const { Router } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// loading .env, if exists
require('dotenv').config({ path: ".env" });

// if .env file doesnt exist, you can give your RapidAPI-Key here 
const myApiKey = process.env.API_KEY || "your-RapidAPI-key";
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json())

const getRouter = require('./routes/gets');
const postRouter = require('./routes/posts');
const putRouter = require('./routes/puts');
const deleteRouter = require('./routes/deletes');

// Get all Databases/Models/Entities
app.get('*', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, getRouter);

// Create Database/Model/Entity
app.post('*', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, postRouter);

// Update Entities
app.put('*', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, putRouter);

// Delete Entity/Model/Database
app.delete('*', function (req, res, next) {
    req.apiKey = myApiKey;
    next();
}, deleteRouter);

// Global Error handling
app.use(function (err, req, res, next) {
    return res.status(err.statusCode || 500).json({
        errorCode: err.statusCode || 500,
        errorMessage: err.message
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})