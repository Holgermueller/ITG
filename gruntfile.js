'use strict';
module.exports = grunt => {

  grunt.initConfig({

    watch: {
      less: {
        files: ['public/assets/less/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['public/assets/js/*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['public/assets/less']
        },
        files: {
          'public/assets/css/style.css': 'public/assets/less/style.less'
        }
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'public/assets/css',
          src: ["*.css", '!*.min.css'],
          dest: 'public/assets/css',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'public/assets/js/ugly.min.js': ['public/assets/js/generator.js']
        }
      }
    },

    browserSync: {
      bsFiles: {
        src: [
          'public/assets/css/*.min.css',
          'public/assets/js/*.min.js'
        ]
      },
      options: {
        livereload: true,
        watchTask: true,
        watchEvents: ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
        server: {
          baseDir: './public'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.task.registerTask('default', ['browserSync', 'watch']);
};
