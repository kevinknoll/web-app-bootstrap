module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      styles: {
        files: {
          'public/lib/css/style.css': 'public/lib/css/style.less'
        }
      }
    },

    watch: {
      less: {
        files: ['public/lib/css/**/*.less'],
        tasks: ['less:styles']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
