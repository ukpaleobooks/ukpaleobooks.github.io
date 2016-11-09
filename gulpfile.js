var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// Sass
gulp.task('css', function() {
	return gulp.src('assets/scss/custom.scss')
	      .pipe(sass())
	      .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename('custom.min.css'))
        .pipe(gulp.dest('assets/css'));
});

// Watch
gulp.task('watch', function() {
     gulp.watch('assets/scss/*.scss', ['css']);
});
