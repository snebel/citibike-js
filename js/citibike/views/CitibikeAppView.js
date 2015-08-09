define([
  'marionette',

  'hbs!citibike/templates/citibikeApp'
], function(
  Marionette,

  template
) {
  return Marionette.LayoutView.extend({    

    el: '#content',

    regions: {
      map: '#map'
    },

    template: template,

    onRender: function() {
      
    }

  });
});