/*
File to make it easy to configure RequireJS
 */
require.config({
    baseUrl: "citibike",
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        "marionette" : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },
        handlebars: {
            exports: "Handlebars"
        },
        hbs: {
            deps: ["underscore"]
        },
        request: {
            deps: ["http"],
            exports: 'request'
        }
    },

    paths: {
        underscore: "lib/underscore/underscore",
        backbone: "lib/backbone/backbone",
        jquery: "lib/jquery/dist/jquery",
        requirejs: "lib/requirejs/require",
        hbs: "lib/require-handlebars-plugin/hbs",
        handlebars: "lib/require-handlebars-plugin/hbs/handlebars",
        marionette: "lib/marionette/lib/backbone.marionette",                
        geolib: 'lib/geolib/src/geolib',
        leaflet: 'lib/leaflet/dist/leaflet',
    },

    packages: [
        {
            name: "when",
            main: "when.js",
            location: "lib/when"
        }
    ],

    hbs: {
        helpers: true,
        i18n: false,
        templateExtension: 'hbs',
        partialsUrl: '',
        helperPathCallback: function(name) {
            return ;
        }
    }
});
