var commonChunks = require('./plugins/common-chunks'),
  dedupePlugin = require('./plugins/dedupe'),
  htmlPlugin = require('./plugins/html'),
  hotPlugin = require('./plugins/hot-module-replacement'),
  uglifyPlugin = require('./plugins/uglify'),
  textPluginInstance = require('./plugins/common-plugins').textPluginInstance,
  variablesPlugin = require('./plugins/variables'),
  webpack = require('webpack'),
  env = process.argv.indexOf('--production') === -1 ? 'development' : 'production';

plugins = [
  htmlPlugin,
  dedupePlugin,
  commonChunks,
  uglifyPlugin,
  variablesPlugin,
  textPluginInstance
];

if(process.argv.indexOf('--production') === -1) {
  plugins.push(hotPlugin);
}

module.exports = plugins;
