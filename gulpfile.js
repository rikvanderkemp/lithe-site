var gulp = require('gulp'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    shell = require('gulp-shell'),
    postMortem = require('gulp-postmortem')
    ;


gulp.task('default', ['sass-watch']);

gulp.task('start-lithe', shell.task([
        'python lithe/main.py &',
        'jobs -p > run.lock'
    ])
);

gulp.task('stop-lithe', shell.task([
    'kill 2748'
]));

gulp.task('sass-watch', function () {
    return gulp.src('web/static/sass/**/*.scss')
        .pipe(postMortem({gulp: gulp, tasks: ['stop-lithe']}))
        .pipe(watch('web/static/sass/**/*.scss', {verbose: true}))
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(
        sass(
            {
                includePaths: ['web/static/sass/lib'],
                errLogToConsole: true,
                outputStyle: 'compressed'
            }
        )
    )
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('web/static/css'))
        ;
});
