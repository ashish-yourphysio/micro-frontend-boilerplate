const overrideWebpackConfig = require("./plugins/override-config");

module.exports = {
  plugins: [
    {
      plugin: overrideWebpackConfig,
    },
  ],
};
