HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new HtmlWebpackPlugin({
  title: 'Angular2-ES6-Webpack-Karma-Jasmine',
  hash: true,
  template: 'app/index.html'
});
