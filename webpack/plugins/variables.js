var webpack = require('webpack'),
  helpers = require('../helpers');

module.exports = new webpack.DefinePlugin({
  'ENV': JSON.stringify(helpers.getEnv()),
  'process.env': {
    'ENV': JSON.stringify(helpers.getEnv()),
    'NODE_ENV': JSON.stringify(helpers.getEnv())
  }
});
