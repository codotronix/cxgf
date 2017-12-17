var gulp  = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//Process script files
gulp.task('concatScripts', function() {
  return gulp.src([
        'cxgf-modules/cxgf-init.js',
        'cxgf-modules/cxgf.Utils.js',
        'cxgf-modules/cxgf.Ticker.js',
        'cxgf-modules/cxgf.KeyEvent.js',
        'cxgf-modules/cxgf.Collision.js',
        'cxgf-modules/cxgf.GameObject.js'
    ])
    .pipe(concat('cxgf.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(concat('cxgf.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});


// Copy all static assets
// gulp.task('copyAssets', function() {
//     gulp.src('www/configs/**')
//     .pipe(gulp.dest('www/dist/configs'));

//     gulp.src('www/css/**')
//     .pipe(gulp.dest('www/dist/css'));

//     gulp.src('www/favicon/**')
//     .pipe(gulp.dest('www/dist/favicon'));

//     gulp.src('www/fonts/**')
//     .pipe(gulp.dest('www/dist/fonts'));

//     gulp.src('www/images/**')
//     .pipe(gulp.dest('www/dist/images'));

//     gulp.src('www/lib/**')
//     .pipe(gulp.dest('www/dist/lib'));

//     gulp.src('www/data/**')
//     .pipe(gulp.dest('www/dist/data'));

//     gulp.src(['www/scripts/**', '!www/scripts/app.js', '!www/scripts/router.js'])
//     .pipe(gulp.dest('www/dist/scripts'));

//     gulp.src('www/index.html')
//     .pipe(gulp.dest('www/dist'));
// });


// create a default task and just log a message
gulp.task('default', ['concatScripts'], function () {
    console.log("Gulping Done...");
});