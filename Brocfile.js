/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//module.exports = app.toTree();

var compileSass = require('broccoli-sass');
var mapCss   = compileSass(['app/styles'], 'app.scss',  'assets/vendor.css');


// Merge the bootstrapFonts with the ember app tree
var mergeTrees = require('broccoli-merge-trees');
module.exports = mergeTrees([app.toTree(), mapCss], { overwrite: true });
