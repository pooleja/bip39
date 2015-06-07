module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-combo-html-css-js');

  grunt.initConfig({
    comboall: {
      test: {
        src : 'src/index.html'
      }
    }
  });

};
