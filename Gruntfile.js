/* eslint-env node */
// This is a basic Gruntfile illustrating how to call the sw-precache library. It doesn't include
// all of the functionality from  the sample gulpfile, such as running a web server, or managing
// separate DEV and DIST directories.

'use strict';

var packageJson = require('./package.json');
var path = require('path');
var swPrecache = require('./node_modules/sw-precache/lib/sw-precache.js');

module.exports = function(grunt) {
  grunt.initConfig({
    swPrecache: {
      dev: {
        handleFetch: false,
        rootDir: './'
      }
    }
  });

  function writeServiceWorkerFile(rootDir, handleFetch, callback) {
    var config = {
      cacheId: packageJson.name,
      dynamicUrlToDependencies: {
        '/': ['./index1.ejs', './page_loader.ejs', './search_bar.ejs', './navbar.ejs', './sidebar.ejs', './dashboard.ejs', './include_js_plugins.ejs', './include_custom_js.ejs', 'js/demo.js'],
        '/sign-in': ['./sign-in.ejs', 'sign-in-partial.ejs', './index1.ejs', './page_loader.ejs', './search_bar.ejs', './navbar.ejs', './sidebar.ejs', './dashboard.ejs', './include_js_plugins.ejs', './include_custom_js.ejs', 'js/demo.js']
      },
      runtimeCaching: [{
        urlPattern: /^https:\/\/udhavi.herokuapp\.com/,
        handler: 'cacheFirst'
      }, {
        urlPattern: /\/sign-in\//,
        handler: 'fastest',
        options: {
            cache: {
              maxEntries: 10,
              name: 'sign-in'
            }
        }
      }],
      // If handleFetch is false (i.e. because this is called from swPrecache:dev), then
      // the service worker will precache resources but won't actually serve them.
      // This allows you to test precaching behavior without worry about the cache preventing your
      // local changes from being picked up during the development cycle.
      handleFetch: handleFetch,
      logger: grunt.log.writeln,
      staticFileGlobs: [
        rootDir + '/css/**.css',
        rootDir + '/css/themes/**.css',
        rootDir + '/**.html',
        rootDir + '/images/**.*',
        rootDir + '/js/**.js',
        rootDir + '/**.ejs'
      ],
      stripPrefix: rootDir + '/',
      // verbose defaults to false, but for the purposes of this demo, log more.
      verbose: true
    };

    swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback);
  }

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['swPrecache']);


  grunt.registerMultiTask('swPrecache', function() {
    /* eslint-disable no-invalid-this */
    var done = this.async();
    var rootDir = this.data.rootDir;
    var handleFetch = this.data.handleFetch;
    /* eslint-enable */

    writeServiceWorkerFile(rootDir, handleFetch, function(error) {
      if (error) {
        grunt.fail.warn(error);
      }
      done();
    });
  });
};