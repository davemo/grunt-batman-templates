/*
 * grunt-batman-templates
 * https://github.com/davemo/grunt-batman-templates
 *
 * Copyright (c) 2013 David Mosher
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var _ = grunt.util._;
  var taskDescription = "precompiles batman templates and generates `Batman.View.store.set` for each template";

  var computesBatmanTemplateStorageKey = function(templateFolder, filePath) {
    var suffixStrippingRegex = /([^.]+)\..+$/;
    var pathWithoutSuffix = filePath.match(suffixStrippingRegex)[1];
    var pathWithoutFolder = pathWithoutSuffix.split(templateFolder)[1];
    return pathWithoutFolder;
  };

  var prepareContent = function(content) {
    return content.replace(/"/g, "\\\"").replace(/'/g, "\\\'").split("\n").join("\\n");
  };

  grunt.registerMultiTask("batman_templates", taskDescription, function() {
    var DEFAULT_TEMPLATE_FOLDER = "app/html";
    var options = this.options({ templateFolder: DEFAULT_TEMPLATE_FOLDER });

    // files src/dest pairs
    _(this.files).each(function(f) {
      var output = [];

      // Warn on and remove invalid source files (if nonull was set).
      var filepaths = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      _(filepaths).each(function(filePath) {
        var storageKey      = computesBatmanTemplateStorageKey(options.templateFolder, filePath);
        var content         = grunt.file.read(filePath);
        var precacheCommand =
          "Batman.View.store.set('" +
            storageKey + "', '" + prepareContent(content) +
          "');";

        output.push(precacheCommand);
      });

      grunt.file.write(f.dest, output.join("\n") + "\n");

      grunt.log.writeln('File "' + f.dest + '" created.');
    });

  });
};
