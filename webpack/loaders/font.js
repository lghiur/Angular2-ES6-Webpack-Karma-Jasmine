var helpers = require('../helpers');

module.exports = {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: helpers.getExcludedFolders(),
  loader: "file-loader"
};
