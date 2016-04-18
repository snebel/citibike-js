define([
  'marionette',
  'backbone',
  'hbs!templates/statsTableTemplate'
], function(
  Marionette,
  Backbone,
  template
) {
  return Marionette.ItemView.extend({

    template: template,

    initialize: function(options) {
      this.stations = options.stations;
      this.model = new Backbone.Model();
      this.stations.once('sync', function() {
        this.calculateStats();
        this.render()
      }, this);
    },

    calculateStats: function() {      
      var docksAvailable = 0;
      var bikesAvailable = 0
      this.stations.each(function(station) {
        docksAvailable += station.get('availableDocks');
        bikesAvailable += station.get('availableBikes');
      }, this)

      this.model.set({
        bikesAvailable: bikesAvailable,
        docksAvailable: docksAvailable,
        totalBikes: bikesAvailable + docksAvailable,        
      });
    },

    templateHelpers: function() {      
      return {        
        bikesAvailablePercent: this._getPercent('bikesAvailable'),
        docksAvailablePercent: this._getPercent('docksAvailable')
      }
    },

    _getPercent: function(attr) {
      var total = this.model.get('totalBikes');
      return Math.round(this.model.get(attr) / total * 1000) / 10;
    }

  });

});