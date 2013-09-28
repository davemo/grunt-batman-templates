'use strict';

var grunt = require('grunt');

exports.batman_templates = {
  default_options_files_object_format: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/default_options_files_object_format.js');
    var expected = grunt.file.read('test/expected/batman_view_precache_output.js');

    test.equal(actual, expected, 'works with default options');

    test.done();
  },

  default_options_files_compact_format: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/default_options_files_compact_format.js');
    var expected = grunt.file.read('test/expected/batman_view_precache_output.js');

    test.equal(actual, expected, 'works with compact files format');

    test.done();
  },

  using_template_folder_and_multiple_extensions_and_files_array_format: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/using_template_folder_and_multiple_extensions_and_files_array_format.js');
    var expected = grunt.file.read('test/expected/batman_view_precache_output.js');

    test.equal(actual, expected, 'works with multiple extensions and templateFolder option');

    test.done();
  }


};
