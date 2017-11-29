var gulp  = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//Process script files
gulp.task('concatScripts', function() {
  return gulp.src([
        'js/cxgf-modules/*.js'
    ])
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