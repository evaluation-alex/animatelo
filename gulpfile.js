const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('open');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const stylish = require('gulp-jscs-stylish');

gulp.task('connect', function () {
    // runs connect server
    connect.server({
        root: ""
    });
});

gulp.task('open', function () {
    // open browser
    var uri = 'http://localhost:8080/app.html';
    open(uri);
});

gulp.task('checkcode', function () {
    // validate source code using jscs and jshint
    gulp.src('.')
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function () { })
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});