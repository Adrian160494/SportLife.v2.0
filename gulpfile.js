let gulp = require('gulp');

let browserSync = require('browser-sync');

let sass = require('gulp-sass');

gulp.task('reload',['sass'],function () {
    browserSync.reload();
});

gulp.task('server',function () {
    browserSync({
        server: './',
    });

    gulp.watch('./index.html',['reload']);
    gulp.watch('./views/home.html',['reload']);
    gulp.watch('./css/**/*.scss',['sass','reload']);
});

gulp.task('sass',function () {
    return (gulp.src('./css/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});