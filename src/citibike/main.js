require(['require-config', 'CitibikeApp'], function(config, CitibikeApp) {  
  // require(['CitibikeApp'], function(CitibikeApp) {   
    var app = new CitibikeApp();
    app.start();     
  // });
});
