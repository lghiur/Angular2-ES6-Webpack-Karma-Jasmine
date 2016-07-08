var helpers = require('../helpers');

module.exports = {
  test: /\.js?$/,
  exclude: helpers.getExcludedFolders(),
  loader: 'babel',
  query: {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['transform-runtime']
  }
};
