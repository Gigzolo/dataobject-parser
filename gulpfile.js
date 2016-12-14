'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var path = require('path');

var tasks = fs.readdirSync('tasks/')
  .filter(function(file) { return file.match(/\.js$/); })
  .forEach(function(task) {
    require('./tasks/'+task);
  });

// Default task
gulp.task('default', ['clean'], function(callback) {
  runSequence('styles', 'lint:frontend', 'bower', 'scripts', 'images', 'favicons', 'fonts', 'meta', 'assets', 'lint:backend', callback);
});
