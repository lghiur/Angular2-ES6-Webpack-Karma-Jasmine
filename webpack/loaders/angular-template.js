var helpers = require('../helpers');

module.exports = {
  test: /\.js?$/,
  exclude: helpers.getExcludedFolders(),
  loader: 'angular2-template-loader',
};
