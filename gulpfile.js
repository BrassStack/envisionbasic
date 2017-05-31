var gulp = require('gulp');
var convert = require('gulp-convert');
var ext_replace = require('gulp-ext-replace');
 
gulp.task('build', function(){
  gulp.src(['syntaxes/*.YAML-tmLanguage'])
    .pipe(convert({
      from: 'yml',
      to: 'plist'
     }))
    .pipe(ext_replace('.tmLanguage'))
    .pipe(gulp.dest('syntaxes/'));
});