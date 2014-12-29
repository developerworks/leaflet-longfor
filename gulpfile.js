var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var gulp = require('gulp');


gulp.task('default', function () {
  gulp.run('lint');
  gulp.watch([
    './examples/*.js'
  ], function (event) {
    gulp.run('lint');
  })
});

gulp.task('lint', function () {
  return gulp.src('./examples/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('compass', function () {
  gulp.src('./scss/**')
    .pipe(compass({
      comments: false,
      css: 'css',
      sass: 'scss',
      image: 'img'
    }));
});