define([
  'marionette',  
  'views/LeafletMapView',

  'hbs!templates/appViewTemplate'
], function(
  Marionette,  
  LeafletMapView,

  template
) {
  return Marionette.LayoutView.extend({  

    template: template,

    el: '#content',

    regions: {
      leafletMap: '#leaflet-map'
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