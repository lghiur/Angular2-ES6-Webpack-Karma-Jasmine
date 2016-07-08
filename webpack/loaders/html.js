var path = require('path');

module.exports = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: [path.join(__dirname, '../../', 'app', 'index.html')]
}
