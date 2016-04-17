define([
    'backbone',
    'jquery',
    'views/LeafletMapView'
], function (
    Backbone,
    $,
    LeafletMapView
) {
    'use strict';

    describe('LeafletMapView', function() {

        var mapView, mapDiv;
        beforeEach(function() {
            mapDiv = $('<div id="map">');
            $('body').append(mapDiv);

            mapView = new LeafletMapView({stations: new Backbone.Collection()});
        });

        afterEach(function() {
            mapDiv.remove();
        });

        it('displays in a div with a map id', function() {
            mapView.render();
            expect(mapView.$('.leaflet-map-pane').length).toBe(1);
            expect(mapView.$('.leaflet-control-container').length).toBe(1);
        });

        it('can render multiple times', function() {
            mapView.render();
            var x = 0;
            mapView.render();

        });
    });
});