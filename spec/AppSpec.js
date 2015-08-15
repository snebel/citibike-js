var request = require("request");
var app = require('../app');

describe('App', function() {

  describe('the server', function() {
    var base_url = "http://localhost:3000/"     

    it('responds with a 200 status code', function(done) {
      request.get(base_url, function(err, resp, body) {            
        expect(resp.statusCode).toBe(200);
        app.server.close();        
        done();
      });    
    });
    
  });  
  
});
