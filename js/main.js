require(['require-config'], function() {  
  require(['jquery', 'CitibikeApp'], function($, CitibikeApp) {   
    var app = new CitibikeApp();
    app.start();     
  });
});
