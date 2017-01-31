var gulp = require('gulp');
/*
 *  Gulp Plugins
 */
var autoprefixer = require('gulp-autoprefixer');
var browserify   = require('gulp-browserify');
var rename       = require('gulp-rename');
var scss         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var dirSync      = require('gulp-directory-sync');
var shell        = require('gulp-shell');

/*
 *    Variables
 */
var paths = {
    "scss": {
        "src": [
            "assets/scss/*.scss",
            "assets/scss/**/*.scss"
        ],
        "dest": "public/wp-content/themes/mrpaulphan/dist/css"
    },
    "js": {
        "src": [
            "assets/js/script.js",
            "assets/js/modules/*.js"
        ],
        "dest": "public/wp-content/themes/mrpaulphan/dist/js"
    }
};

var space = " ";

/*
 *  Styles Task
 */
gulp.task('styles', function() {
    gulp.src(paths.scss.src)
        .pipe(plumber())
        .pipe(scss({
            style: 'expanded',
            precision: 5,
            includePaths: [
                'node_modules/include-media/dist'
            ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'ie 11'],
            cascade: false
        }))
        .pipe(rename('screen.css'))
        .pipe(gulp.dest(paths.scss.dest));
});

/*
 *  Scripts Task
 */
gulp.task('scripts', function() {
    gulp.src(paths.js.src)
        .pipe(plumber())
        .pipe(browserify())
        .pipe(gulp.dest(paths.js.dest));
});


/*
 *  Watch Task
 */
gulp.task('watch', function() {
    gulp.watch(paths.scss.src, ['styles']);
    gulp.watch(paths.js.src, ['scripts']);

});


/*
 *  Build Task
 */
gulp.task('default', [
    'styles',
    'scripts',
    'watch'
]);
