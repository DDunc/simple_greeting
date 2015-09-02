"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var fConcerns = ['greeter.js', 'lib/**/*.js', 'bin/greet', 'test/**/*.js', 'gulpfile.js'];

gulp.task('jshint', function(){
	return gulp.src(fConcerns)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('test', function(){
	return gulp.src('test/**/*test.js')
	.pipe(gulpMocha({reporter: 'nyan'}));
});

gulp.task('default', ['jshint', 'test'], function(){
	gulp.watch(fConcerns, function(){
	gulp.run('jshint', 'test')
	});
});