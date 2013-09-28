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
    batman: {
      templates: {
        files: 'test/sample_batman_application/app/html/**/*.html',
        dest:  'tmp/actual_output_template_precache.js'
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
