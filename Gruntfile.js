module.exports = function(grunt) {
  grunt.initConfig({
    pkg: '<json:package.json>',
    jshint: {
      src: ['published/assets/js/ds_chrono.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true
        }
      }
    },
    concat: {
      js: {
        src: ['published/assets/js/utils.js', 
              'published/assets/js/sparkline.js',
              'published/assets/js/sparklinePlus.js', 
              'published/assets/js/legend.js'],
        dest: 'dest/js/bugle.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/js/bugle.min.js': ['dest/js/bugle.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, 
           src: ['dest/js/bugle.min.js'], 
           dest: 'published/assets/js/', filter: 'isFile'}
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint'); 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', 'concat uglify');
};
