'use strict';


module.exports = function (grunt) {

    var importOnce = require('node-sass-import-once');
    // Project configuration.
    grunt.initConfig({

        clean: {
            css: ['css'],
            bower: ['bower_components'],
            reports: ['reports']
        },

        sass: {
            options: {
                importer: importOnce,
                importOnce: {
                  index: true,
                  bower: true
                }
            },
            ahaTable: {
              files: {
                'css/noprefix/aha-table-sketch.css': 'sass/aha-table-sketch.scss',
                'css/noprefix/aha-table.css': 'sass/aha-table-predix.scss'
              }
            },
            pxDataTable: {
              files: {
                'css/noprefix/px-data-table-sketch.css': 'sass/px-data-table-sketch.scss',
                'css/noprefix/px-data-table.css': 'sass/px-data-table-predix.scss'
              }
            },
            pxDataTableCell: {
              files: {
                'css/noprefix/px-data-table-cell-sketch.css': 'sass/px-data-table-cell-sketch.scss',
                'css/noprefix/px-data-table-cell.css': 'sass/px-data-table-cell-predix.scss'
              }
            },
            pxDataTableHighlight: {
              files: {
                'css/noprefix/px-data-table-highlight-sketch.css': 'sass/px-data-table-highlight-sketch.scss',
                'css/noprefix/px-data-table-highlight.css': 'sass/px-data-table-highlight-predix.scss'
              }
            },
            demo: {
              files: {
                'css/noprefix/px-data-table-demo.css': 'sass/px-data-table-demo.scss'
              }
            }
        },

        autoprefixer: {
          options: {
            browsers: ['last 2 version']
          },
          multiple_files: {
            expand: true,
            flatten: true,
            src: 'css/noprefix/*.css',
            dest: 'css'
          }
        },

        shell: {
            options: {
                stdout: true,
                stderr: true
            },
            bower: {
                command: 'bower install'
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'js/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    interrupt: true,
                    livereload: true
                }
            },
            htmljs: {
                files: ['*.html', '*.js'],
                options: {
                    interrupt: true,
                    livereload: true
                }
            }
        },

        depserve: {
            options: {
              open: '<%= depserveOpenUrl %>'
            }
        },

        concurrent: {
            devmode: {
                tasks: ['watch', 'depserve'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        bump: {
          options:{
            files: ['bower.json', 'package.json'],
            updateConfigs: [],
            commitFiles: ['package.json', 'bower.json'],
            push: false
          }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dep-serve');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-bump');


    // Default task.
    grunt.registerTask('default', 'Basic build', [
        'sass',
        'autoprefixer'
    ]);

    // First run task.
    grunt.registerTask('firstrun', 'Basic first run', function() {
        grunt.config.set('depserveOpenUrl', '/index.html');
        grunt.task.run('default');
        grunt.task.run('depserve');
    });

    grunt.registerTask('devmode', 'Development Mode', [
        'concurrent:devmode'
    ]);

    grunt.registerTask('release', 'Release', [
        'clean',
        'shell:bower',
        'default'
    ]);

};
