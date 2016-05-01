define([
  'leaflet'
], function(
  Leaflet
) {
  return {
    
    setUpLeaflet: function() {
      Leaflet.Icon.Default.imagePath = '/static/images';
      this.map = Leaflet.map('map').setView(this.nycLatLng, this.initialZoom);
    },

    initialZoom: 14,

    locateOptions: {
      setView: true,
      maxZoom: 16
    },

    layerOptions: function() {
      return {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.emerald',
        accessToken: this.publicAccessToken
      };
    },

    nycLatLng: Leaflet.latLng(40.7300527, -73.9920916),

    mapboxUrl: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    
    /*
     * Note: This is the default public mapbox access token, and cannot be used
     * to modify application data. See mapbox.com/help/define-access-token/
     */
    publicAccessToken: 'pk.eyJ1Ijoic25lYmVsIiwiYSI6ImMwMTFmNTc0MzkyN2RjZjRjNWQ2MmZlNWQ5MWE1Yzk4In0.SfuwufvE4mt7vr8R5aHCQA'
  };
});
