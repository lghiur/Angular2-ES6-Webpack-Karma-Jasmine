var helpers = require('../helpers');

module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  exclude: helpers.getExcludedFolders(),
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
  ]
};
