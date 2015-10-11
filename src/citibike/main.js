require(['require-config'], function() {
    require.config(window.requireOptions);
    require(['CitibikeApp'], function(CitibikeApp) {
        var app = new CitibikeApp();
        app.start();
    });
});
