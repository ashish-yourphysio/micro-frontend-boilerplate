const overrideWebpackConfig = require("./plugins/override-config.js");

module.exports = {
  plugins: [
    {
      plugin: overrideWebpackConfig,
    },
  ],
  webpack: {
    plugins: {
      remove: ["ModuleScopePlugin"],
    },
  },
};
