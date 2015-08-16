var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jasmine = require('gulp-jasmine');
var coveralls = require('gulp-coveralls');

gulp.task('test', function (cb) {    
  gulp.src(['app.js', 'routes/*.js'])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function() {
      gulp.src(['spec/*.js'])
        .pipe(jasmine())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran        
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 70 } })) // Enforce a coverage of at least 90%                
        .on('end', cb);        
      })
});

gulp.task('coveralls', ['test'], function(cb) {
  gulp.src('./coverage/lcov.info')
    .pipe(coveralls());
});

gulp.task('stuff', ['test', 'coveralls']);

