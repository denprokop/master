'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    src: {
      style: 'src/*.css',
      html: 'src/*.html'
    },
    watch: {
      style: 'src/*.css',
      html: 'src/*.html'
    }
};


var config_dev = {
  server: {
      baseDir: ["./src"]
  },
  // tunnel: true,
  host: 'localhost',
  port: 9000
};

gulp.task('webserver_dev', function () {
  browserSync(config_dev);
});

gulp.task('style', function () {
  gulp.src(path.src.style)
    .pipe(reload({stream: true}));
});

gulp.task('html', function () {
  gulp.src(path.src.html)
    .pipe(reload({stream: true}));
});



gulp.task('src', [
  'style',
  'html'
]);

gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html');
    });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style');
    });
});





gulp.task('default', ['src', 'webserver_dev', 'watch']);