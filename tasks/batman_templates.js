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

  var DEFAULT_TEMPLATE_FOLDER = "app/html";

  var computesBatmanTemplateStorageKey = function(templateFolder, filePath) {
    var numberOfTemplateFolderSegments = templateFolder.split("/").length;
    var pathWithoutSuffix = _.str.rtrim(filePath, ".html")
    var pathWithoutFolder = pathWithoutSuffix.split("/" + templateFolder + "/")[1];
    return pathWithoutFolder;
  };

  var prepareContent = function(content) {
    return content.replace(/"/g, "\\\"").split("\n").join("\\n");
  };

  grunt.registerTask("batman_templates", taskDescription, function(target) {
    this.requiresConfig("batman.templates.files");
    this.requiresConfig("batman.templates.dest");

    var config          = grunt.config.get("batman.templates");
    var templateFolder  = config.templateFolder || DEFAULT_TEMPLATE_FOLDER;
    var templateFiles   = config.files;
    var destinationFile = config.dest;
    var output          = [];

    _(grunt.file.expand(templateFiles)).each(function(filePath) {
      var storageKey      = computesBatmanTemplateStorageKey(templateFolder, filePath);
      var content         = grunt.file.read(filePath);
      var precacheCommand =
        "Batman.View.store.set('" +
          storageKey + "', '" + prepareContent(content) +
        "');";

      output.push(precacheCommand);
    });

    grunt.file.write(destinationFile, output.join("\n") + "\n");
  });
};
