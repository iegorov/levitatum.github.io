'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    browserSync = require("browser-sync"),
    pug = require('gulp-pug'),
    cachebust = require('gulp-cache-bust'),
    reload = browserSync.reload;

// Ресурсы проекта
var paths = {
  styles: 'assets/source/styles/',
  css: 'assets/css/',
  scripts: 'assets/source/scripts/',
  js: 'assets/js/',
  templates: 'templates/',
  img: 'assets/source/img/',
  bundles: 'assets/img/',
  html: './'
};
// Запуск живой сборки
gulp.task('live', function() {
  gulp.start('pug', 'cache', 'watch');
});

// Федеральная служба по контролю за оборотом файлов
gulp.task('watch', function(done) {
  gulp.watch(paths.templates + '**/*.pug', gulp.series('pug'));
  done();
});

// Шаблонизация
gulp.task('pug', function() {
  return gulp.src(paths.templates + '*.pug')
    .pipe(plumber({errorHandler: onError}))
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.html));
});

// Очистка кэша для яваскрипта и ЦССа
gulp.task('cache', function() {
  return gulp.src(paths.html + '*.html')
    .pipe(cachebust())
    .pipe(gulp.dest(paths.html))
    .pipe(reload({stream: true}));
});

// Рефреш ХТМЛ-страниц
gulp.task('html', function () {
  gulp.src(paths.html + '*.html')
    .pipe(reload({stream: true}));
});


// Одноразовая сборка проекта
gulp.task('default', gulp.series('pug', 'cache'));

// Ошибки
var onError = function(error) {
  gutil.log([
    (error.name + ' in ' + error.plugin).bold.red,
    '',
    error.message,
    ''
  ].join('\n'));
  gutil.beep();
  this.emit('end');
};
