var gulp= require('gulp');
var sass= require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('./assets/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function(){
	gulp.watch('/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);

//type gulp sass or watch in terminal