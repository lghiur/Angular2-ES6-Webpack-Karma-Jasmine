var path = require('path');
var plugins = require('./test-plugins');
var webpackLoaders = require('./test-loaders');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve(__dirname, '../', 'app'),
  },
  module: {
    preLoaders: webpackLoaders.preLoaders,
    loaders: webpackLoaders.loaders,
    postLoaders: webpackLoaders.postloaders
  },
  plugins: plugins,
};
