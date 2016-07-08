var path = require('path');

module.exports = {
  test: /\.js$/,
  loader: 'istanbul-instrumenter-loader',
  include: path.resolve(__dirname, '../../', 'app'),
  exclude: [
    /\.spec.js$/,
    /node_modules/
  ]
};
