var webpackLoaders = {},
  htmlLoader = require('./loaders/html'),
  babelLoader = require('./loaders/babel'),
  istanbulInstrumenterLoader = require('./loaders/istanbul-instrumenter'),
  jsonLoader = require('./loaders/json'),
  sourmapLoader = require('./loaders/source-map'),
  stylesLoader = require('./loaders/styles');

webpackLoaders.loaders = [
  babelLoader,
  htmlLoader,
  jsonLoader,
  stylesLoader
];
webpackLoaders.preLoaders = [
  sourmapLoader
];
webpackLoaders.postLoaders = [
  istanbulInstrumenterLoader
];

module.exports = webpackLoaders;
