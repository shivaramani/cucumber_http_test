const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('httptest', shell.task([
  'cucumber-js httptest/features -r httptest/steps'
]));
