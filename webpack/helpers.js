var getEnvironment = function getEnvironment() {
  return process.argv.indexOf('--production') === -1 ? 'development' : 'production';
};

var getExcludedFolders = function getExcludedFolders() {
  return /(node_modules|build|gulp)/;
};

module.exports = {
  getEnv: getEnvironment,
  getExcludedFolders: getExcludedFolders
};
