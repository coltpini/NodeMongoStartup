module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.initConfig({
		stylus: {
			compile: {
				//specify each "combined" file. Each file can then use @import() to bring in its dependencies
				files: {
					'app/styles/app.css': 'app/styles/styl/app.styl'
				}
			}
		},
		//minify the JS file to be as small as possible
		uglify: {
			app: {
				src: ['app/js/dev/**.js'],
				dest: 'app/js/app.min.js'
			}
		},
		express: {
			options: {
				// Override defaults here
				port: 3000,

			},
			dev: {
			  options: {
				script: 'server/app.js'
			  }
			}
		  },
		watch: {
			express: {
				files: ['server/*.js'],
				tasks: ['express:dev'],
				options: {
					nospawn: true
				}
			},
			 stylus: {
				files: ['app/styles/styl/*.styl'],
				tasks: ['stylus']
			},
			uglify : {
				files: ['app/js/dev/*.js'],
				tasks: ['uglify']
			},
			livereload: {
				options: {livereload : true},
				files: ['app/styles/app.css','app/**/*.html','app/js/**/*.js']
			}
		}
	});

	grunt.registerTask('default',['stylus','uglify','express:dev','watch']);
};