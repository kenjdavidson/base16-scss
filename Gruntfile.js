module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          './dist/highlight.css': './src/highlight.scss'      
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
          './dist/highlight.min.css': './dist/highlight.css'
        }
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**',
          dest: 'dest'
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
