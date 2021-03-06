'use strict';

module.exports = {
	app: {
		title: 'ULib',
		description: '',
		keywords: ''
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	tmpDir: 'tmp/',
	uploadPath: 'public/uploads',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/metisMenu/dist/metisMenu.css',
				'public/lib/angular-ui-select/dist/select.css',
				'public/lib/angular-loading-bar/build/loading-bar.min.css',
				'public/lib/angular-toggle-switch/angular-toggle-switch.css',
				'public/lib/angular-toggle-switch/angular-toggle-switch-bootstrap.css',
				'public/lib/material-design-iconic-font/css/material-design-iconic-font.min.css',
				'public/lib/sweetalert/lib/sweet-alert.css',
				'public/lib/angular-bootstrap-datetimepicker/src/css/datetimepicker.css',
				'public/lib/bootstrap-daterangepicker/daterangepicker-bs3.css',
				'public/lib/angular-bootstrap-datetimepicker/src/css/datetimepicker.css',
				'//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en',
				'public/lib/fontawesome/css/font-awesome.min.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/metisMenu/dist/metisMenu.js',
				'public/lib/angular-ui-select/dist/select.min.js',
				'public/lib/ng-file-upload/angular-file-upload.min.js',
				'public/lib/angular-loading-bar/build/loading-bar.min.js',
				'public/lib/angular-toggle-switch/angular-toggle-switch.min.js',
				'public/lib/sweetalert/lib/sweet-alert.min.js',
				'public/lib/moment/moment.js',
				'public/lib/bootstrap-daterangepicker/daterangepicker.js',
				'public/lib/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
				'public/lib/angular-daterangepicker/js/angular-daterangepicker.min.js',
				'public/angular-drag-and-drop-lists.min.js',
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};