var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var sinon = require('sinon');

var CitibikeApp = require('../../main/citibike/CitibikeApp');
var CitibikeAppView = require('../../main/citibike/views/CitibikeAppView');
var StationCollection = require('../../main/citibike/collections/StationCollection');

describe('CitibikeApp', function() {
  var app;
  var fetchSpy = sinon.stub(StationCollection.prototype, 'fetch');
  beforeEach(function() {
    app = new CitibikeApp({channel: {}});
  });

  it('fetches citibike stations', function () {
    expect(fetchSpy.callCount).to.eq(1);
  });

  it('renders a CitibikeAppView on start', function() {
    var renderSpy = sinon.stub(CitibikeAppView.prototype, 'render');
    app.start();
    expect(renderSpy.callCount).to.eq(1);
  });
});
