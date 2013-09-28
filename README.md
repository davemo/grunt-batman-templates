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

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

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
});
```

Sample Output
---------------------------

### Sample output from Unit Tests
The following shows what the resulting `batman-view-precache.js` file looks like, based on the unit tests:

```js
Batman.View.store.set('posts/index', '<h1>Welcome to the Posts Page</h1>\n<ul class=\"posts\">\n  <li class=\"post\" data-foreach-post=\"posts\">\n    <span class=\"title\" data-bind=\"post.title\"></span>\n    <span class=\"created-at\" data-bind=\"post.created_at\"></span>\n  </li>\n</ul>\n');
Batman.View.store.set('posts/show', '<h1>Post: <span data-bind=\"post.title\"></span></h1>\n<span class=\"created-at\" data-bind=\"post.created_at\"></span>\n<div data-bind=\"post.content\"></div>\n');
Batman.View.store.set('posts/subfolder/subtemplate', '<h1>This is a special template</h1>\n<div>Verifies that subfolder path lookups in the task work</div>\n');
Batman.View.store.set('products/index', '<h1>Welcome to the Posts Page</h1>\n<ul class=\"products\">\n  <li class=\"product\" data-foreach-product=\"products\">\n    <span class=\"name\" data-bind=\"product.name\"></span>\n    <span class=\"price\" data-bind=\"product.price\"></span>\n  </li>\n</ul>\n');
```

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
