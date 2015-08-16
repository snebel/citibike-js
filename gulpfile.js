var gulp = require('gulp');

var istanbul = require('gulp-istanbul');
// var jasmine = require('jasmine-node');
var jasmine = require('gulp-jasmine');

gulp.task('test', function (cb) {  
  gulp.src(['lib/**/*.js', 'main.js'])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['Spec/*.js'])
        .pipe(jasmine())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran        
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
        .on('end', cb);
    });
  // return gulp.src('spec/*Spec.js')
  //     .pipe(jasmine());
});