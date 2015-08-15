var request = require("request");
var app = require('../app');

describe('App', function() {

  describe('the server', function() {
    var base_url = "http://localhost:3000/"  
    var specCount = 0;   

    afterEach(function() {
      specCount++;
      if (specCount >= 2) {
        app.server.close();
      }
    });

    it('can serve the home page', function(done) {
      request.get(base_url, function(err, resp, body) {          
        expect(resp.statusCode).toBe(200);
        expect(body).toContain('<!DOCTYPE html>');
        done();
      });
    });

    it('can fetch station data', function(done) {
      request.get(base_url + 'api/stations.json', function(err, resp, body) {          
                
        expect(resp.statusCode).toBe(200);
        var stations = JSON.parse(body);
        expect(stations.length).toBeGreaterThan(450);
        
        // verify station data comes back in form app expects
        var station = stations[0];        
        expect(typeof station.id).toBe('number');
        expect(typeof station.stationName).toBe('string');
        expect(typeof station.availableDocks).toBe('number');
        expect(typeof station.availableBikes).toBe('number');
        expect(typeof station.totalDocks).toBe('number');
        expect(typeof station.latitude).toBe('number');
        expect(typeof station.longitude).toBe('number');
        expect(typeof station.statusValue).toBe('string');        
        
        done();
      });
    });
    
  });  
  
});
