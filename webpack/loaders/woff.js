var helpers = require('../helpers');

module.exports = {
  test: /\.(woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: helpers.getExcludedFolders(),
  loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[hash].[ext]"
};
