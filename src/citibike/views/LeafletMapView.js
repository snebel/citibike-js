define([
  'backbone',
  'leaflet'
], function(
  Backbone,
  L
) {
  return Backbone.View.extend({

    initialize: function(options) {
      this.stations = options.stations;
      this.stations.once('sync', this.addMarkers, this);      
    },

    render: function() {
      var nyc = L.latLng(40.7300527, -73.9920916); // TODO: replace with current location
      this.map = L.map('map').setView(nyc, 16);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox.emerald',
        accessToken: 'pk.eyJ1Ijoic25lYmVsIiwiYSI6ImMwMTFmNTc0MzkyN2RjZjRjNWQ2MmZlNWQ5MWE1Yzk4In0.SfuwufvE4mt7vr8R5aHCQA'
      }).addTo(this.map);      
    },

    addMarkers: function() {            
      this.stations.each(function(station) {
        var latLng = L.latLng(station.get('latitude'), station.get('longitude'));
        var marker = L.marker(latLng);
        marker.bindPopup('<h3>' + station.get('availableBikes') + ' Bikes,</br>' + station.get('availableDocks') + ' Docks</h3>').openPopup();
        marker.addTo(this.map)
      }, this);
    }

  });

});