var helpers = require('../helpers');

module.exports = {
  test: /\.js$/,
  exclude: helpers.getExcludedFolders(),
  loader: 'eslint-loader'
};
