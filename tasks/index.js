const gulp = require('gulp')
const concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('./src/sass/app.scss')
    .pipe((things) => console.log('things is ', things))
    .pipe(gulp.dest('destination'))
})
