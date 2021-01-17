var unirest = require("unirest");
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    // console.log(req.query);
    let db = req.query.db;

    let apiUrl = "https://fairestdb.p.rapidapi.com/" + db;

    var httpReq = unirest("GET", apiUrl);
    
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