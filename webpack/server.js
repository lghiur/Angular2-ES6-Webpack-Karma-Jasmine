var serverConfig;

serverConfig = {
  contentBase: './build',
  hot: true,
  noInfo: false,
  quiet: false,
  lazy: false, // No watching, but recompilation on every request
  historyApiFallback: true,
  stats: {
    assets: false,
    colors: true,
    cached: false,
    chunks: true,
    chunkModules: false,
    source: false,
    chunkOrigins: false
  },
  port: '3000'
};

module.exports = serverConfig;
