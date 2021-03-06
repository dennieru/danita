// Generated on 2016-08-23 using generator-angular 0.15.1
(function() {
 'use strict';

 // # Globbing
 // for performance reasons we're only matching one level down:
 // 'test/spec/{,*/}*.js'
 // use this if you want to recursively match all subfolders:
 // 'test/spec/**/*.js'

 module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
   sprite: 'grunt-spritesmith',
   foo: '@abc/grunt-foo', // for private modules.
   bar: 'custom/bar.js' // for custom tasks.
  });

  // Configurable paths for the application
  var appConfig = {
   app: require('./bower.json').appPath || 'app',
   dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

   // Project settings
   yeoman: appConfig,
   // Eslint configurations
   eslint: {
    options: {
     configFile: 'config/.eslintrc',
     format: 'checkstyle',
     outputFile: 'eslint-checkstyle.xml'
    },
    jsFiles: {
     src: ['src/app/**/*.js',
      '!src/app/cordova.js',
      '!src/app/bootstrap.js'
     ]
    }
   },

   // Htmlhint configurations
   htmlhint: {
    allFiles: [
     'src/app/**/*.html'
    ],
    options: {
     htmlhintrc: 'config/.htmlhintrc'
    }
   },

   // Watches files for changes and runs tasks based on the changed files
   watch: {
    bower: {
     files: ['bower.json'],
     tasks: ['wiredep']
    },
    js: {
     files: ['<%= yeoman.app %>/src/{,*/}*.js'],
     tasks: ['newer:jshint:all'],
     options: {
      livereload: '<%= connect.options.livereload %>'
     }
    },
    jsTest: {
     files: ['test/spec/{,*/}*.js'],
     tasks: ['newer:jshint:test', 'karma']
    },
    compass: {
     files: ['<%= yeoman.app %>/assets/css/{,*/}*.{scss,sass}'],
     tasks: ['compass:server', 'autoprefixer']
    },
    gruntfile: {
     files: ['Gruntfile.js']
    },
    livereload: {
     options: {
      livereload: '<%= connect.options.livereload %>'
     },
     files: [
      '<%= yeoman.app %>/{,*/}*.html',
      '.tmp/css/{,*/}*.css',
      '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= yeoman.app %>/resources/{,*/}*.json'
     ]
    }
   },

   // The actual grunt server settings
   connect: {
    options: {
     port: 9008,
     // Change this to '0.0.0.0' to access the server from outside.
     hostname: '0.0.0.0',
     livereload: 35729
    },
    livereload: {
     options: {
      open: true,
      middleware: function(connect) {
       return [
        connect.static('.tmp'),
        connect().use(
         '/bower_components',
         connect.static('./bower_components')
        ),
        connect().use(
         '/app/css',
         connect.static('./app/css')
        ),
        connect.static(appConfig.app)
       ];
      }
     }
    },
    test: {
     options: {
      port: 9001,
      middleware: function(connect) {
       return [
        connect.static('.tmp'),
        connect.static('test'),
        connect().use(
         '/bower_components',
         connect.static('./bower_components')
        ),
        connect.static(appConfig.app)
       ];
      }
     }
    },
    dist: {
     options: {
      open: true,
      base: '<%= yeoman.dist %>'
     }
    }
   },

   // Make sure there are no obvious mistakes
   jshint: {
    options: {
     jshintrc: '.jshintrc',
     reporter: require('jshint-stylish')
    },
    all: {
     src: [
      'Gruntfile.js',
      '<%= yeoman.app %>/scripts/{,*/}*.js'
     ]
    },
    test: {
     options: {
      jshintrc: 'test/.jshintrc'
     },
     src: ['test/spec/{,*/}*.js']
    }
   },

   // Empties folders to start fresh
   clean: {
    dist: {
     files: [{
      dot: true,
      src: [
       '.tmp',
       '<%= yeoman.dist %>/{,*/}*',
       '!<%= yeoman.dist %>/.git{,*/}*'
      ]
     }],
     options: {
      force: true
     }
    },
    server: '.tmp'
   },

   // Add vendor prefixed styles
   autoprefixer: {
    options: {
     browsers: ['last 1 version']
    },
    server: {
     options: {
      map: true
     },
     files: [{
      expand: true,
      cwd: '.tmp/css/',
      src: '{,*/}*.css',
      dest: '.tmp/css/'
     }]
    },
    dist: {
     files: [{
      expand: true,
      cwd: '.tmp/css/',
      src: '{,*/}*.css',
      dest: '.tmp/css/'
     }]
    }
   },

   // Automatically inject Bower components into the app
   wiredep: {
    app: {
     src: ['<%= yeoman.app %>/index.html'],
     ignorePath: /\.\.\//
    },
    test: {
     devDependencies: true,
     src: '<%= karma.unit.configFile %>',
     ignorePath: /\.\.\//,
     fileTypes: {
      js: {
       block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
       detect: {
        js: /'(.*\.js)'/gi
       },
       replace: {
        js: '\'{{filePath}}\','
       }
      }
     }
    },
    sass: {
     src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
     ignorePath: /(\.\.\/){1,2}bower_components\//
    }
   },

   // Compiles Sass to CSS and generates necessary files if requested
   compass: {
    options: {
     sassDir: '<%= yeoman.app %>/assets/css',
     cssDir: '.tmp/css',
     generatedImagesDir: '.tmp/images/generated',
     imagesDir: '<%= yeoman.app %>/images',
     javascriptsDir: '<%= yeoman.app %>/scripts',
     fontsDir: '<%= yeoman.app %>/assets/css/fonts',
     importPath: './bower_components',
     httpImagesPath: '/images',
     httpGeneratedImagesPath: '/images/generated',
     httpFontsPath: '/css/fonts',
     relativeAssets: false,
     assetCacheBuster: false,
     raw: 'Sass::Script::Number.precision = 10\n'
    },
    dist: {
     options: {
      generatedImagesDir: '<%= yeoman.dist %>/images/generated'
     }
    },
    server: {
     options: {
      sourcemap: true
     }
    }
   },

   // Renames files for browser caching purposes
   filerev: {
    dist: {
     src: [
      '<%= yeoman.dist %>/scripts/{,*/}*.js',
      '<%= yeoman.dist %>/css/{,*/}*.css',
      //'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= yeoman.dist %>/css/fonts/*'
     ]
    }
   },

   // Reads HTML for usemin blocks to enable smart builds that automatically
   // concat, minify and revision files. Creates configurations in memory so
   // additional tasks can operate on them
   useminPrepare: {
    html: '<%= yeoman.app %>/index.html',
    options: {
     dest: '<%= yeoman.dist %>',
     flow: {
      html: {
       steps: {
        js: ['concat', 'uglifyjs'],
        css: ['cssmin']
       },
       post: {}
      }
     }
    }
   },

   // Performs rewrites based on filerev and the useminPrepare configuration
   usemin: {
    html: ['<%= yeoman.dist %>/{,*/}*.html'],
    css: ['<%= yeoman.dist %>/css/{,*/}*.css'],
    options: {
     assetsDirs: [
      '<%= yeoman.dist %>',
      '<%= yeoman.dist %>/images',
      '<%= yeoman.dist %>/css'
     ]
    }
   },

   // The following *-min tasks will produce minified files in the dist folder
   // By default, your `index.html`'s <!-- Usemin block --> will take care of
   // minification. These next options are pre-configured if you do not wish
   // to use the Usemin blocks.
   // cssmin: {
   //   dist: {
   //     files: {
   //       '<%= yeoman.dist %>/styles/main.css': [
   //         '.tmp/styles/{,*/}*.css'
   //       ]
   //     }
   //   }
   // },
   // uglify: {
   //   dist: {
   //     files: {
   //       '<%= yeoman.dist %>/scripts/scripts.js': [
   //         '<%= yeoman.dist %>/scripts/scripts.js'
   //       ]
   //     }
   //   }
   // },
   // concat: {
   //   dist: {}
   // },

   imagemin: {
    dist: {
     files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/images',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= yeoman.dist %>/images'
     }]
    }
   },

   svgmin: {
    dist: {
     files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/images',
      src: '{,*/}*.svg',
      dest: '<%= yeoman.dist %>/images'
     }]
    }
   },

   htmlmin: {
    dist: {
     options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true
     },
     files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
      src: ['*.html', '**/{,*/}*.html'],
      dest: '<%= yeoman.dist %>'
     }]
    }
   },

   // ng-annotate tries to make the code safe for minification automatically
   // by using the Angular long form for dependency injection.
   ngAnnotate: {
    dist: {
     files: [{
      expand: true,
      cwd: '.tmp/concat/scripts',
      src: '*.js',
      dest: '.tmp/concat/scripts'
     }]
    }
   },

   // Replace Google CDN references
   cdnify: {
    dist: {
     html: ['<%= yeoman.dist %>/*.html']
    }
   },

   // Copies remaining files to places other tasks can use
   copy: {
    dist: {
     files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>',
      dest: '<%= yeoman.dist %>',
      src: [
       '*.{ico,png,txt,json}',
       '.htaccess',
       '*.html',
       'templates/{,*/}*.html',
       'images/{,*/}*.{webp}',
       'styles/fonts/{,*/}*.*'
      ]
     }, {
      expand: true,
      cwd: '.tmp/images',
      dest: '<%= yeoman.dist %>/images',
      src: ['generated/*']
     }]
    },
    styles: {
     expand: true,
     cwd: '<%= yeoman.app %>/assets/css',
     dest: '.tmp/css/',
     src: '{,*/}*.css'
    }
   },

   // Run some tasks in parallel to speed up the build process
   concurrent: {
    server: [
     'compass:server'
    ],
    test: [
     'compass'
    ],
    dist: [
     'compass:dist',
     'imagemin',
     'svgmin'
    ]
   },
   jasmine: {
    src: '<%= yeoman.app %>/scripts/{,*/}*.js',
    specs: 'test/spec/{,*/}*.js',
    vendor: 'path/to/angular.js'
   },
   // Test settings
   karma: {
    unit: {
     configFile: 'test/karma.conf.js',
     singleRun: true
    }
   }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
   if (target === 'dist') {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
   }

   grunt.task.run([
    'clean:server',
    'wiredep',
    'concurrent:server',
    'autoprefixer:server',
    'connect:livereload',
    'watch'
   ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
   grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
   grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
   'clean:server',
   'wiredep',
   'concurrent:test',
   'autoprefixer',
   'connect:test',
   'karma'
  ]);

  grunt.registerTask('build', [
   'clean:dist',
   'wiredep',
   'useminPrepare',
   'concurrent:dist',
   'autoprefixer',
   'ngtemplates',
   'concat',
   'ngAnnotate',
   'copy:dist',
   'cdnify',
   'cssmin',
   'uglify',
   'filerev',
   'usemin',
   'htmlmin'
  ]);

  grunt.registerTask('default', [
   'newer:jshint',
   'newer:jscs',
   'test',
   'build'
  ]);
 };
})();