module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: false,
          'include css': true
        },
        files: {
          'dist/css/main.css': 'src/css/*.styl'
        }
      }
    },
    autoprefixer: {
      no_dest_single: {
        src: 'dist/css/main.css'
      }
    },
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    },
    browserify: {
      client: {
        src: [ 'src/js/plugins.js', 'src/js/main.js' ],
        dest: 'dist/js/main.js'
      }
    },
    uglify: {
      my_target: {
        options: {},
        files: {
          'dist/js/main.js': [ 'dist/js/main.js' ]
        }
      }
    },
    watch: {
      files: [ 'Gruntfile.js', 'src/index.html', 'src/**/*.js', 'src/**/*.styl' ],
      tasks: [ 'buildDev' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [ 'watch' ]);

  grunt.registerTask('buildDev', [
    'stylus',
    'autoprefixer',
    'browserify',
    'copy'
  ]);
  grunt.registerTask('buildProd', [
    'buildDev',
    'uglify'
  ]);

};