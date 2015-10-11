define([
    'CitibikeApp',
    'collections/StationCollection'
], function (
    CitibikeApp,
    StationCollection
) {
    'use strict';

    describe('CitibikeApp', function() {

        it('fetches stations on initialize', function() {
            spyOn(StationCollection.prototype, 'fetch');
            var app = new CitibikeApp();
            expect(app.stations.fetch).toHaveBeenCalled();
        });
    });
});