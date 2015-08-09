define([
  'marionette',
  'StationCollection',
  'citibike/views/citibikeAppView'
], function(
  Marionette,
  StationCollection,
  CitibikeAppView
) {
  return Marionette.Application.extend({

    initialize: function() {
      
      this.stations = new StationCollection();
      this.stations.fetch({
        success: function(stations, resp) {

        }
      });
    },

    onStart: function() {
      var appView = new CitibikeAppView();
      appView.render();
    }

  });
});