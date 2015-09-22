define([
  'backbone',
  'leaflet'
], function(
  Backbone,
  Leaflet
) {
  return Backbone.View.extend({

    initialize: function(options) {
      this.stations = options.stations;
      this.stations.once('sync', this.addMarkers, this);      
    },

    render: function() {      
      // TODO: prioritize current location, default to nyc
      var nyc = Leaflet.latLng(40.7300527, -73.9920916); 
      var map = this.map = Leaflet.map('map').setView(nyc, 14);
      map.on('locationfound', function(location) {
        Leaflet.circle(location.latlng, location.accuracy/2).addTo(map);
      });

      this.map.locate({setView: true, maxZoom: 16});

      Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.emerald',
        accessToken: 'pk.eyJ1Ijoic25lYmVsIiwiYSI6ImMwMTFmNTc0MzkyN2RjZjRjNWQ2MmZlNWQ5MWE1Yzk4In0.SfuwufvE4mt7vr8R5aHCQA'
      }).addTo(this.map);        
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
    }

  });

});