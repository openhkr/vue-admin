var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(done) {
    runSequence(
        [ 'assets', 'lib'],
        function() {
        }
    );
});

gulp.task('assets', copyAssets);

gulp.task('lib', copyLib);

gulp.task('clean', function() {
    return del('dist/monitor');
});
function copyAssets(opts) {
    opts.src = opts.src || 'src/assets/**/*';
    opts.dest = opts.dest || 'dist/monitor/assets';

    return gulp.src(opts.src)
        .pipe(gulp.dest(opts.dest));
}

function copyLib(opts) {
    var result;
    result = gulp.src(['src/lego/**/*'])
        .pipe(gulp.dest('dist/monitor/lego'));
    return result;
}

