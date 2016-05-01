define([
  'backbone.marionette',
  'backbone',
  'leaflet',
  'handlebars',
  './LeafletTrait'
], function(  
  Marionette,
  Backbone,
  Leaflet,
  Handlebars,
  LeafletTrait
) {
  return Marionette.ItemView.extend(LeafletTrait).extend({

    initialize: function(options) {
      this.stations = options.stations;
      this.setUpLeaflet();
      this.stations.once('sync', this.addMarkers, this); 
    },

    template: Handlebars.compile('<div id="map">'),

    onRender: function() {
      this._watchLocation();
      this.map.locate(this.locateOptions);
      var tileLayer = Leaflet.tileLayer(this.mapboxUrl, this.layerOptions());
      tileLayer.addTo(this.map);
    },

    addMarkers: function() {            
      this.stations.each(this.addMarker, this);
    },

    addMarker: function(station) {
      var latLng = Leaflet.latLng(station.get('latitude'), station.get('longitude'));
      var marker = Leaflet.marker(latLng);
      var content = '<h3>' + station.get('availableBikes') + ' bikes,</br>' + station.get('availableDocks') + ' docks</h3>';
      var popup = Leaflet.popup({closeButton: false}).setContent(content);        
      marker.bindPopup(popup);
      marker.addTo(this.map)
    },

    _watchLocation: function() {
      if (navigator.geolocation) {
        var locationCircle = Leaflet.circle(this.nycLatLng, 20).addTo(this.map);
        navigator.geolocation.watchPosition(function(position) {
          var coords = position.coords;
          var location = Leaflet.latLng(coords.latitude, coords.longitude);
          locationCircle.setLatLng(location);
          locationCircle.setRadius(coords.accuracy / 2);
        });  
      }
    }
  });

});