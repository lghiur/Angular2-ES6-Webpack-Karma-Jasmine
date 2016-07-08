var helpers = require('../helpers');

module.exports = {
  test: /\.scss$/,
  exclude: helpers.getExcludedFolders(),
  loaders: ['css-to-string', 'css?sourceMap', 'resolve-url', 'sass?sourceMap', 'postcss']
};
