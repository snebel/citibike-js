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

    el: '#content',

    regions: {
      leafletMap: '#leaflet-map',
      map: '#map'
    },
    
    initialize: function(options) {
      this.stations = options.stations;      
      this.render();
    },

    onRender: function() {      
      this.getRegion('leafletMap').show(new LeafletMapView({
        stations: this.stations
      }));
    }

  });
});