define([
  'backbone',
  'leaflet'
], function(
  Backbone,
  L
) {
  return Backbone.View.extend({

    render: function() {
      var map = L.map('map').setView([40.7300527, -73.9920916], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox.emerald',
        accessToken: 'pk.eyJ1Ijoic25lYmVsIiwiYSI6ImMwMTFmNTc0MzkyN2RjZjRjNWQ2MmZlNWQ5MWE1Yzk4In0.SfuwufvE4mt7vr8R5aHCQA'
      }).addTo(map);


      

    }
  });
});