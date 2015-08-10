define([
  'marionette',
  'citibike/views/MapView',

  'hbs!citibike/templates/appViewTemplate'
], function(
  Marionette,
  MapView,

  template
) {
  return Marionette.LayoutView.extend({  

    template: template,

    el: '#content',

    regions: {
      map: '#map'
    },
    
    initialize: function(options) {
      this.stations = options.stations;      
      this.render();
    },

    onRender: function() {
      this.getRegion('map').show(new MapView({
        stations: this.stations
      }));
    }

  });
});