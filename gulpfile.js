const gulp = require('gulp');
const concat = require('gulp-concat');
const es = require('event-stream');
const minify = require('gulp-minify');

gulp.task('compress-js', () => {
  es.merge([
    gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
      'node_modules/sweetalert/dist/sweetalert.min.js',
    ]),
    gulp.src([
      'assets/js/custom.js',
      'assets/js/requests.js',
    ]).pipe(minify({
      ext: {
        min: '.js',
      },
      noSource: true,
    })),
  ])
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('dist/js'))
    .on('error', (err) => {
      console.error('Error in compress task', err.toString());
    });
});

gulp.task('compress-js', () => gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest('dist/css')));

gulp.task('default', ['compress-js']);
