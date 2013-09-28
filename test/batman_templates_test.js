'use strict';

var grunt = require('grunt');

exports.batman_templates = {
  properlyPrecompilesTemplateCacheDirectives: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/actual_output_template_precache.js');
    var expected = grunt.file.read('test/expected_output_template_precache.js');

    test.equal(actual, expected, 'should properly generate batman template precache');

    test.done();
  }
};
