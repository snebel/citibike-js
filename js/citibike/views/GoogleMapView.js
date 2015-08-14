define([
  'backbone',
  'geolib'  
], function(  
  Backbone,
  geolib  
) {

  return Backbone.View.extend({      

    initialize: function(options) {  
            
      this.stations = options.stations;
      // this.listenTo(this.stations, 'sync', this.addMarkers);
      this.listenTo(this.stations, 'sync', this.addClickListener);
      this.center = new google.maps.LatLng(40.7300527, -73.9920916);
    },

    render: function() {
      var mapOptions = {
        zoom: 15,
        center: this.center
      };

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);      
      return this;
    },

    addClickListener: function() {
      var self = this;

      google.maps.event.addListener(this.map, 'dblclick', function(e){
        var evtLatLng = {
          latitude: e.latLng.G,
          longitude: e.latLng.K
        }

        self.stations.each(function(station) {
          var stationLatLng = {
            latitude: station.get('latitude'),
            longitude: station.get('longitude')
          }

          if (geolib.isPointInCircle(stationLatLng, evtLatLng, 500)) {
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(stationLatLng.latitude, stationLatLng.longitude),
              map: self.map
            });
          }
        })
      });
    },

    addMarkers: function() {   
      var self = this;   
      this.stations.each(function(station) {

        var latLng = new google.maps.LatLng(station.get('latitude'), station.get('longitude'));
        var marker = new google.maps.Marker({
          position: latLng,
          map: self.map,
          title: 'Hello World!'
        });

        var infowindow = new google.maps.InfoWindow({
            content: 'Bikes: ' + station.get('availableBikes') + ', Docks: ' + station.get('availableDocks')
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(self.map, marker);
        });

      });
    }

  });

});