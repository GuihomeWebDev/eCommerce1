module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-css');
  grunt.initConfig({
    cssmin: {
      dist: {
        src: 'style.css',
        dest: 'min/style.min.css'
      }
    }
  });
  grunt.registerTask('css', 'cssmin');
}
