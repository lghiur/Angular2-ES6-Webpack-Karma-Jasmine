var path = require('path'),
  webpackLoaders = require('./webpack/webpack-loaders'),
  plugins = require('./webpack/plugins'),
  server = require('./webpack/server'),
  autoprefixer = require('autoprefixer'),
  webpackConfig;

webpackConfig = {
  entry: {
    app: [
      './app/main.js'
    ],
    vendor: [
      './app/vendor.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[id].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map'
  },
  module: {
    preLoaders: webpackLoaders.preLoaders,
    loaders: webpackLoaders.loaders
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.join(__dirname)],
    modulesDirectories: [
      'node_modules'
    ]
  },
  eslint: {
    configFile: '.eslintrc',
    emitError: true,
    failOnError: true
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins:  plugins,
  debug: (process.argv.indexOf('--production') === -1) ? true : false,
  devtool: (process.argv.indexOf('--production') === -1) ? 'inline-source-map' : 'source-map',
  devServer: server
};

if(process.argv.indexOf('--production') === -1) {
  webpackConfig.entry.app.unshift('webpack/hot/dev-server');
  webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:3000');
}

module.exports = webpackConfig;
