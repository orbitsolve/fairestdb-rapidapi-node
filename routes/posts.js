const unirest = require("unirest");
const express = require('express')
const router = express.Router()

// Create Database/Model/Entity
router.use(function (req, res, next) {

    // Concatenates URL from request with FaiRESTdb endpoint
    var apiUrl = "https://fairestdb.p.rapidapi.com" + req.url;

    var httpReq = unirest("POST", apiUrl);

    httpReq.headers({
        "content-type": "application/json",
        "x-rapidapi-key": req.apiKey,
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "useQueryString": true
    });

    httpReq.type("json");
    httpReq.send(req.body);

    httpReq.end(function (response) {
        if (response.error) {
            res.status(response.body.errorCode || 500).send(response.body);
        } else {
            res.send(response.body);
        }
    });

});

module.exports = router