define([
  'backbone.marionette',
  './LeafletMapView',
  './templates/appViewTemplate.hbs'
], function(
  Marionette,  
  LeafletMapView,

  template
) {
  return Marionette.LayoutView.extend({  

    template: template,

    el: '#content', // needed for Leaflet

    regions: {
      directionsForm: '#closest-bikes',
      leafletMap: '#leaflet-map'
    },
    
    initialize: function(options) {
      this.stations = options.stations;      
    },

    onRender: function() {
      if (!navigator.geolocation) {
        this.$('#geo-error').text('Geolocation is not supported by this browser');
      }

      this.showChildView('leafletMap', new LeafletMapView({
        stations: this.stations
      }));
    }

  });
});