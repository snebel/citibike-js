define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    
    url: '/api/stations.json'

  });
})