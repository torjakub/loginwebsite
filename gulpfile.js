const gulp = require( 'gulp' );
const zip = require( 'gulp-zip' );

function bundle() {
	return gulp
		.src([
			'**/*',
			'!node_modules/**',
			'!assets/**/*.map',
			'!blocks/**/*.map',
			'!blocks/**/*.scss',
			'!blocks/**/index.js',
			'!blocks/**/index.js',
			'!src/**',
			'!bundle/**',
			'!.gitignore',
			'!.stylelintrc.js',
			'!gulpfile.js',
			'!README.md',
			'!babel.config.js',
			'!package.json',
			'!package-lock.json',
			'!postcss.config.js',
			'!webpack.config.js',
			'!.env',
			'!.env.sample'
		])
		.pipe( zip( 'theme.zip' ) )
		.pipe( gulp.dest( 'bundle' ) );
}

exports.bundle = bundle;
