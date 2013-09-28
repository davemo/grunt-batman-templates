/*
 * grunt-batman-templates
 * https://github.com/davemo/grunt-batman-templates
 *
 * Copyright (c) 2013 David Mosher
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      tests: ['tmp'],
    },

    // configuration targets for system under test
    batman_templates: {

      default_options_files_object_format: {
        files: {
          'tmp/default_options_files_object_format.js': 'test/sample_batman_application/app/html/**/*.html'
        },
      },

      default_options_files_compact_format: {
        src: 'test/sample_batman_application/app/html/**/*.html',
        dest:  'tmp/default_options_files_compact_format.js'
      },

      using_template_folder_and_multiple_extensions_and_files_array_format: {
        options: {
          templateFolder: 'test/sample_batman_application_nested_in_rails/app/assets/batman/html'
        },
        files: [
          {
            src: 'test/sample_batman_application_nested_in_rails/app/assets/batman/html/**/*.js.htm',
            dest: 'tmp/using_template_folder_and_multiple_extensions_and_files_array_format.js'
          }
        ]
      }
    },

    // tests
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'batman_templates', 'nodeunit']);

  // By default, run all tests.
  grunt.registerTask('default', ['test']);

};
