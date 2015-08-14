define([
  'marionette',
  'citibike/views/GoogleMapView',
  'citibike/views/LeafletMapView',

  'hbs!citibike/templates/appViewTemplate'
], function(
  Marionette,
  GoogleMapView,
  LeafletMapView,

  template
) {
  return Marionette.LayoutView.extend({  

    template: template,

    el: '#content',

    regions: {
      googleMap: '#map',
      leafletMap: '#leaflet-map'
    },
    
    initialize: function(options) {
      this.stations = options.stations;      
      this.render();
    },

    onRender: function() {
      // this.getRegion('googleMap').show(new GoogleMapView({
      //   stations: this.stations
      // }));

      this.getRegion('leafletMap').show(new LeafletMapView({
        stations: this.stations
      }));
    }

  });
});