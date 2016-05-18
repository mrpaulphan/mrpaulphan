module.exports = function(grunt) {

  // Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-px-to-rem');


  // Project Configuration
  grunt.initConfig({

    // Grunt sass
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded'
                },
        files: {
          'public/source/css/screen.css': 'source/sass/screen.scss'
        }
      }
    },

    // Grunt imagemin
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'source/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/source/images/'
        }]
      }
    },

    // Grunt uglify - Minify all JS
    uglify: {
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false
        },
        files: {
          'public/source/js/script.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/highlightjs/highlight.pack.js',
            'bower_components/fullpage.js/dist/jquery.fullpage.js',
            // Include:
            'source/js/01-libraries/*.js',
            'source/js/02-plugins/*.js',
            'source/js/03-modules/*.js',
            'source/js/script.js',
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: 'source/fonts/',
            src: ['**'],
            dest: 'public/source/fonts'
          },
        ],
      },
    },
    // Will Automatically insert the correct prefixes for CSS properties. Just write plain CSS.
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      dev: {
        src: 'public/source/**/*.css'
      },
    },
    px_to_rem: {
      dist: {
        options: {
          base: 16,
          fallback: false,
          fallback_existing_rem: false,
          ignore: [],
          map: false
        },
        files: {
          'public/assets/css/screen.css': [
            'public/assets/css/screen.css'
          ]
        }
      }
    },

    svgmin: { //minimize SVG files
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        expand: true,
        cwd: 'source/svg/',
        src: ['**/*.svg'],
        dest: 'tmp/svg/'
          //ext: '.colors-pale-dark-greyDark-gold-blue-facebookBg-googleplusBg-twitterBg.svg'
      }
    },


    // Copy database updates down to local
    shell: {
      options: {
        execOptions: {
          maxBuffer: 1024 * 1000
        }
      },
      dbsync: {
        command: 'ssh drexelba@drexelbaseball.com "mysqldump -pu5PTqUUZwvGl -u drexelba_user  drexelba_db" |  /Applications/MAMP/Library/bin/mysql -u root -proot drexelbaseball_cms '
      },
      uploadsync: {
        command: 'rsync -avz /home2/drexelba/public/DrexelBaseball-CMS/public/source/uploads public/temp/source/uploads'
      },
      cleanup: {
        command: 'rm -r tmp'
      },
      prepareCleanUp: {
        command: 'rm -r public/source/images/svg/'
      }
    },
    // Grunt watch
    watch: {
      styles: {
        files: ['source/sass/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      scripts: {
        files: ['source/js/**/*.js'],
        tasks: ['uglify:dev']
      },
      images: {
        files: ['source/images'],
        tasks: ['imagemin:all']
      }
    }
  });

  // Task configuration
  grunt.registerTask('default', ['sass:dev', 'copy', 'imagemin:all',
    'uglify:dev', 'autoprefixer:dev', 'px_to_rem', 'watch'
  ]);
  grunt.registerTask('sync', ['shell:sync']);


};
