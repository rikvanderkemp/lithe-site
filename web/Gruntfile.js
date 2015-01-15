module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['static/sass/**/*.{scss,sass}','static/sass/_partials/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['static/css/*.css'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'static/css/main.css': 'static/sass/main.scss'
                }
            }
        }
    });
    grunt.registerTask('default', ['sass:dist', 'watch']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};