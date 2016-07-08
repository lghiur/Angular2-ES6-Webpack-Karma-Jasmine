var ExtractTextPlugin = require("extract-text-webpack-plugin"),
textPluginInstance = new ExtractTextPlugin('[name].css');

module.exports = {
  textPluginInstance: textPluginInstance
};
