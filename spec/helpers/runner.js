var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    baseUrl: 'spec',

    paths: {      
      'backbone': '.././src/citibike/lib/backbone/backbone',
      'underscore': '.././src/citibike/lib/underscore/underscore',
      'geolib': '.././src/citibike/lib/geolib/src/geolib',      
      'leaflet': 'helpers/mocks/leafletMock',
      'marionette': '.././src/citibike/lib/marionette/lib/backbone.marionette', 
      'hbs': '.././src/citibike/lib/require-handlebars-plugin/hbs',

      'views/GoogleMapView': '.././src/citibike/views/GoogleMapView',
      'views/LeafletMapView': '.././src/citibike/views/LeafletMapView',

      'templates/appViewTemplate': '.././src/citibike/templates/appViewTemplate',
      
      'CAVS': 'citibike/views/CitibikeAppViewSpec'
    }

    // hbs: {
    //     helpers: true,
    //     i18n: false,
    //     templateExtension: 'hbs',
    //     partialsUrl: ''
    //     // helperPathCallback: function(name) {
    //     //     return '';
    //     // }
    // }
});

// Make define available globally like it is in the browser
global.define = requirejs;
// global.describe = require('./libs/jasmine').describe;
// global.it = require('./libs/jasmine').it;
// global.expect = require('./libs/jasmine').expect;
// global.beforeEach = require('./libs/jasmine').beforeEach;

