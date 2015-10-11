var jasminePath = ['../../spec/lib/jasmine-2.3.4/jasmine'];
var jasmineHtmlPath = ['../../spec/lib/jasmine-2.3.4/jasmine-html'];
var jasmineHtmlDeps = {deps: ['jasmine']};
var jasmineBootPath = ['../../spec/lib/jasmine-2.3.4/boot'];
var jasmineBootDeps = {deps: ['jasmine-html']};

require(['../src/citibike/require-config'], function () {
    var options = window.requireOptions;
    options.baseUrl = '../src/citibike';

    options.paths['jasmine'] = jasminePath;
    options.paths['jasmine-html'] = jasmineHtmlPath;
    options.paths['jasmine-boot'] = jasmineBootPath;

    options.shim['jasmine-html'] = jasmineHtmlDeps;
    options.shim['jasmine-boot'] = jasmineBootDeps;

    require.config(options);

    require(['jasmine-boot'], function() {
       require([
           '../../spec/citibike/CitibikeAppTests'
       ], function() {
            window.onload();
       });
    });
});
