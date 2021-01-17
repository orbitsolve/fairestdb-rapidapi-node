var unirest = require("unirest");
// const request = require('request');
var express = require('express')
var router = express.Router()

// get all entities
router.get('/', function (req, res) {
    // console.log(req.query);
    let db = req.query.db;
    let model = req.query.model;

    var httpReq = unirest("GET", "https://fairestdb.p.rapidapi.com/library/book");
    
    httpReq.headers({
        "x-rapidapi-key": req.apiKey,
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "useQueryString": true
    });    
    
    httpReq.end(function (response) {
        if (response.error) {
            res.status(500).send(response.body);
        }
    
        res.send(response.body);
    });

})

module.exports = router