# danita

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
(function () {
    'use strict';

    // # Globbing
    // One level down:
    // 'src/app/{,*/}*.js'
    // Recursively match all subfolders:
    // 'src/app/**/*.js'

    module.exports = function (grunt) {

        // Load grunt tasks automatically
        require('load-grunt-tasks')(grunt);

        // Display the elapsed execution time of grunt tasks. Can help when optimizing build times
        require('time-grunt')(grunt);

        // Automatically load required Grunt tasks
        require('jit-grunt')(grunt, {
            sprite: 'grunt-spritesmith',
            foo: '@abc/grunt-foo',        // for private modules.
            bar: 'custom/bar.js'          // for custom tasks.
        });

        // Configurable paths for the application
        var appConfig = {
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        };

        // Define the configuration for all the tasks
        grunt.initConfig({
		
            // Configurable paths for the application
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
                          '!src/app/bootstrap.js']
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

            // Watches files for changes and runs tasks based on changed files
            watch: {
                bower: {
                    files: ['bower.json'],
                    tasks: ['wiredep']
                },
                js: {
                    files: ['<%= yeoman.app %>/app/{,*/}*.js'],
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
                    files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
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
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.app %>/resources/{,*/}*.json'
                    ]
                }
            },

            // Replaces text patterns
            replace: {
                development: {
                    options: {
                        patterns: [{
                            json: grunt.file.readJSON('./config/environments/development.json')
                        }]
                    },
                    files: [{
                        expand: true,
                        flatten: true,
                        src: ['./config/builds.js'],
                        dest: '<%= yeoman.app %>/app/core/'
                    }]
                },
                staging: {
                    options: {
                        patterns: [{
                            json: grunt.file.readJSON('./config/environments/staging.json')
                        }]
                    },
                    files: [{
                        expand: true,
                        flatten: true,
                        src: ['./config/builds.js'],
                        dest: '<%= yeoman.app %>/app/core/'
                    }]
                },
                production: {
                    options: {
                        patterns: [{
                            json: grunt.file.readJSON('./config/environments/production.json')
                        }]
                    },
                    files: [{
                        expand: true,
                        flatten: true,
                        src: ['./config/builds.js'],
                        dest: '<%= yeoman.app %>/app/core/'
                    }]
                }
            },

            // The actual grunt server settings
            connect: {
                options: {
                    port: 9001,
                    // Change this to '0.0.0.0' to access the server from outside.
                    hostname: '0.0.0.0',
                    livereload: 35729
                },
                livereload: {
                    options: {
                        open: true,
                        middleware: function (connect) {
                            return [
                                connect.static('.tmp'),
                                connect().use(
                                    '/bower_components',
                                    connect.static('./bower_components')
                                ),
                                connect().use(
                                    '/app/styles',
                                    connect.static('./app/styles')
                                ),
                                connect.static(appConfig.app)
                            ];
                        }
                    }
                },
                test: {
                    options: {
                        port: 9001,
                        middleware: function (connect) {
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

            // Makes sure code styles are up to par and there are no obvious mistakes
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
                        jshintrc: '.jshintrc'
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

            // Adds vendor prefixed styles
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
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }]
                },
                dist: {
                    files: [{
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }]
                }
            },

            // Compiles Sass to CSS and generates necessary files if requested
            compass: {
                options: {
                    sassDir: '<%= yeoman.app %>/styles',
                    cssDir: '.tmp/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.app %>/images',
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
                    importPath: './bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images/generated',
                    httpFontsPath: '/styles/fonts',
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
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        //'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/styles/fonts/*'
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
                css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
                options: {
                    assetsDirs: [
                        '<%= yeoman.dist %>',
                        '<%= yeoman.dist %>/images',
                        '<%= yeoman.dist %>/styles'
                    ]
                }
            },

            // Minify PNG and JPEG images
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

            // Minify SVG files
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

            // Minify HTML files
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
                        '**/*.html',
                        'templates/{,*/}*.html',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/angular-tree-control/images/{,*/}*.png',
                        'views/templates/settings-general/{,*/}*.html'
                    ]
                }, {
                        expand: true,
                        cwd: 'bower_components/angular',
                        dest: '<%= yeoman.dist %>/bower_components/angular',
                        src: ['angular.min.js']
                }, {
                        expand: true,
                        cwd: 'src/app/services/http',
                        dest: '<%= yeoman.dist %>/app/services/http',
                        src: ['http-request.service.js']
                }, {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: ['generated/*']
                }, {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/{,*/}*.*'],
                        dest: '<%= yeoman.dist %>'
                }, {
                        expand: true,
                        cwd: 'bower_components/font-awesome',
                        src: ['fonts/{,*/}*.*'],
                        dest: '<%= yeoman.dist %>'
                }, {
                        expand: true,
                        cwd: 'bower_components/material-design-icons',
                        src: ['iconfont/{,*/}*.*'],
                        dest: '<%= yeoman.dist %>/bower_components/material-design-icons'
                }, {
                        expand: true,
                        cwd: 'bower_components/angular-i18n/',
                        src: '*.js',
                        dest: '<%= yeoman.dist %>/bower_components/angular-i18n'
                }, {
                        expand: true,
                        cwd: 'bower_components/material-design-icons/device/1x_web/',
                        src: '*.png',
                        dest: '<%= yeoman.dist %>/bower_components/material-design-icons/device/1x_web'
                }, {
                        expand: true,
                        cwd: 'bower_components/material-design-icons/action/1x_web/',
                        src: '*.png',
                        dest: '<%= yeoman.dist %>/bower_components/material-design-icons/action/1x_web'
                }, {
                        expand: true,
                        cwd: 'bower_components/material-design-icons/alert/1x_web/',
                        src: '*.png',
                        dest: '<%= yeoman.dist %>/bower_components/material-design-icons/alert/1x_web'
                }, {
                        expand: true,
                        cwd: 'bower_components/material-design-icons/content/1x_web/',
                        src: '*.png',
                        dest: '<%= yeoman.dist %>/bower_components/material-design-icons/content/1x_web'
                }, {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: 'resources/{,*/}*.json',
                        dest: '<%= yeoman.dist %>'
                }, {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: 'bower_components/angular-tree-control/images/{,*/}*.png',
                        dest: '<%= yeoman.dist %>/images'
                }, {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/css/',
                        src: ['*.css'],
                        dest: '<%= yeoman.dist %>/bower_components/bootstrap/dist/css'
                }, {
                        expand: true,
                        cwd: 'bower_components/angular-messages/',
                        src: ['*.js'],
                        dest: '<%= yeoman.dist %>/bower_components/angular-messages'
                }, {
                        expand: true,
                        cwd: 'bower_components/ngWYSIWYG/dist/images',
                        src: '*.*',
                        dest: '<%= yeoman.dist %>/styles/images'
                    }]
                },
                styles: {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    dest: '.tmp/styles/',
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
				src:    '<%= yeoman.app %>/scripts/{,*/}*.js',
				specs: 'test/spec/{,*/}*.js',
				vendor: 'path/to/angular.js'
			},
			karma: {
			    unit: {
			        configFile: 'test/karma.conf.js',
			        singleRun: true
			    }
			}
        });

        grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
            if (target === 'dist') {
                return grunt.task.run(['build', 'connect:dist:keepalive']);
            }

            grunt.task.run([
                'clean:server',
                'concurrent:server',
                'autoprefixer:server',
                'connect:livereload',
                'replace:development',
                'watch'
            ]);
        });

        grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
            grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
            grunt.task.run(['serve:' + target]);
        });

        grunt.registerTask('test', [
            'clean:server',
            'concurrent:test',
            'autoprefixer',
            'connect:test',
			'karma'
        ]);

        grunt.registerTask('build', [
			'karma',
            'clean:dist',
            'replace:production',
            'useminPrepare',
            'concurrent:dist',
            'autoprefixer',
            'concat',
            'ngAnnotate',
            'copy:dist',
            'cssmin',
            'uglify',
            'filerev',
            'usemin',
            'htmlmin'
        ]);

    };
})();
