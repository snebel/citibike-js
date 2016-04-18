require(['require-config'], function(config) {
  require([
      'marionette',
      'collections/StationCollection',
      'views/stats/StatsTableView'
    ], function(
      Marionette,
      StationCollection,
      StatsTableView
    ) {

      var statsApp = new Marionette.Application();
      statsApp.addRegions({
        statsTable: '#stats-table' 
      });
      
      var stations = new StationCollection();
      var table = new StatsTableView({stations: stations});
      stations.fetch();

      statsApp.start();
      statsApp.statsTable.show(table);
  });
});
