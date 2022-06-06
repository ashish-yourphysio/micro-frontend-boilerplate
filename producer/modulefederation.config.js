const deps = require("./package.json").dependencies;

module.exports = {
  name: "producer",
  exposes: {
    "./Button": "./src/Button",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
