require(['require-config'], function() {  
  require(['CitibikeApp'], function(CitibikeApp) {   
    var app = new CitibikeApp();
    app.start();     
  });
});
