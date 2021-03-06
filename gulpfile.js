'use strict';

var gulp = require( 'gulp' );
var download = require( "gulp-download" );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );

gulp.task( 'download-orbit-controls', function () {
	return download( [
			'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/js/controls/OrbitControls.js',
		] )
		.pipe( concat( 'three-orbit-controls.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'three' ) );
} );


gulp.task( 'download-webvr', function () {
    return download( [
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/js/controls/VRControls.js',
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/js/effects/VREffect.js',
            'https://raw.githubusercontent.com/borismus/webvr-boilerplate/master/bower_components/webvr-polyfill/build/webvr-polyfill.js',
            'https://raw.githubusercontent.com/borismus/webvr-boilerplate/master/build/webvr-manager.js'
        ] )
        .pipe( concat( 'three-webvr.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'three' ) );
} );

gulp.task( 'default', [ 'download-orbit-controls' ], function () {
	return gulp.src( [
			'node_modules/three/three.min.js',
		] )
		.pipe( gulp.dest( 'three' ) );
} );
