var webpackLoaders = {},
  angularTemplateLoader = require('./loaders/angular-template'),
  babelLoader = require('./loaders/babel'),
  eslintLoadder = require('./loaders/eslint'),
  htmlLoader = require('./loaders/html'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  imageLoader = require('./loaders/image'),
  fontLoader = require('./loaders/font'),
  sourceMapLoader = require('./loaders/source-map'),
  stylesLoader = require('./loaders/styles'),
  woffLoader = require('./loaders/woff');

webpackLoaders.loaders = [
  angularTemplateLoader,
  babelLoader,
  fontLoader,
  htmlLoader,
  imageLoader,
  sourceMapLoader,
  stylesLoader,
  woffLoader
];
webpackLoaders.preLoaders = [];

if(process.argv.indexOf('--production') === -1) {
  webpackLoaders.preLoaders.push(eslintLoadder);
}

module.exports = webpackLoaders;
