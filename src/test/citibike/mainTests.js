var expect = require('chai').expect;
var sinon = require('sinon');
var CitibikeApp = require('../../main/citibike/CitibikeApp');

describe('main', function() {

  it('starts the citibike app', function() {
    var startSpy = sinon.spy(CitibikeApp.prototype, 'start');
    require('../../main/citibike/main');
    expect(startSpy.callCount).to.eq(1);
  });
});
