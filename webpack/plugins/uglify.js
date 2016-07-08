var webpack = require('webpack'),
  helpers = require('../helpers');

var uglifyProdConfig = {
  compress: {
    warnings: false,
    screw_ie8: true
  },
  beautify: false,
  mangle: {
    screw_ie8 : true
  }
},
uglifyDevConfig = {
  beautify: true,
  mangle: false,
  dead_code: false,
  unused: false,
  deadCode: false,
  compress: {
    screw_ie8: true,
    keep_fnames: true,
    drop_debugger: true,
    dead_code: false,
    unused: false,
    warnings: false
  },
  comments: true,
},
uglifyConfig = (helpers.getEnv() === 'production') ? uglifyProdConfig : uglifyDevConfig;

module.exports = new webpack.optimize.UglifyJsPlugin(uglifyConfig);
