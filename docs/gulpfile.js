/**
 * Created by akmoch on 23/09/16.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var sh = require('shelljs');

var paths = {
    rst: ['./*.rst'],
    tpl : ['./_templates/*'],
    stat : ['./_static/*'],
    conf : ['./conf.py']
};

gulp.task('default');

gulp.task('html', function (cb) {
    exec('make html', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.rst, ['html']);
    gulp.watch(paths.tpl, ['html']);
    gulp.watch(paths.stat, ['html']);
    gulp.watch(paths.conf, ['html']);
});