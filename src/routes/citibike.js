var router = require('express').Router();
var request = require('request');
var url = 'http://www.citibikenyc.com/stations/json';

/* GET Citibike Stations JSON. */
router.get('/api/stations.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  request({url: url, json: true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body.stationBeanList);      
    } else {      
      res.status(response.statusCode).send('Problem getting Citibike data');
    }
  });
});

module.exports = router;
