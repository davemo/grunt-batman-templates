grunt-batman-templates
======================

> Generates precache commands for Batman templates to pre-populate `Batman.View.store`

Getting Started
------------------

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-batman-templates --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-batman-templates');
```

The "batman" task
---------------------------

### Overview
In your project's Gruntfile, add a section named `batman` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  batman: {
    templates: {
      templateFolder: 'app/html' // optional, defaults to 'app/html'
      files: 'app/html/**/*.html'
      dest: 'batman-view-precache.js'
    }
  }
})
```

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
