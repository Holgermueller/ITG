'use strict';
module.exports = grunt => {

  grunt.initConfig({

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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

};