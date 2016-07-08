Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('immutable');

// RxJS
require('rxjs/Rx');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');
var NgRedux = require('ng2-redux').NgRedux;
var combineReducers = require('redux-immutable').combineReducers;

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);


// This gets replaced by karma webpack with the updated files on rebuild
var __karmaWebpackManifest__ = [];

// require all modules ending in ".spec.js" from the
// current directory and all subdirectories
var testsContext = require.context('../app', true, /\.spec\.js/);

function inManifest(path) {
  return __karmaWebpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest);

// Run all tests if we didn't find any changes
if (!runnable.length) {
  runnable = testsContext.keys();
}

runnable.forEach(testsContext);
