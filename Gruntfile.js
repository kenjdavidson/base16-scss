module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          './dist/css/base16scss.css': './src/base16scss.scss'      
        },{
          expand: true,
          cwd: 'example/scss',
          src: ['*.scss'],
          dest: './example/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          './dist/css/base16scss.min.css': './dist/css/base16scss.css'
        }
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**',
          dest: 'dist/sass'
        },{
          expand: true,
          cwd: 'src',
          src: '**',
          dest: 'docs/_sass/base16-scss'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'copy']);

};
