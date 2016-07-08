var webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin({
  name : 'vendor',
  filename: "vendors.js",
  minChunks: Infinity
});
