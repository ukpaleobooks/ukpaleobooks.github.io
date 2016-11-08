var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// Sass
gulp.task('sass', function() {
	return gulp.src('assets/scss/custom.scss')
	      .pipe(sass())
	      .pipe(gulp.dest('assets/css'))
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('assets/css/custom.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename('custom.min.css'))
        .pipe(gulp.dest('assets/css'));
});

// Watch
gulp.task('watch', function() {
     gulp.watch('assets/scss/*.scss', ['sass', 'minify-css']);
});
