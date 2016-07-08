var path = require('path');

module.exports = {
  test: /\.json$/,
  loader: 'json-loader',
  exclude: path.resolve(__dirname, '../../', 'app', 'index.html')
};
