const unirest = require("unirest");
const express = require('express')
const router = express.Router()

// Delete Databases/Model/Entities
router.use(function (req, res) {

    // Concatenates URL from request with FaiRESTdb endpoint
    var apiUrl = "https://fairestdb.p.rapidapi.com" + req.url;
    console.log(apiUrl);

    var httpReq = unirest("DELETE", apiUrl);

    httpReq.headers({
        "x-rapidapi-key": req.apiKey,
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "useQueryString": true
    });

    httpReq.end(function (response) {
        if (response.error) {
            res.status(response.body.errorCode || 500).send(response.body);
        } else {
            res.send(response.body);
        }
    });

})

module.exports = router