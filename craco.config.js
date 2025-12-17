module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        (warning) =>
          warning.module &&
          warning.module.resource &&
          warning.module.resource.includes(
            "node_modules/@mediapipe/tasks-vision"
          ) &&
          warning.message.includes("Failed to parse source map"),
      ];
      return webpackConfig;
    },
  },
};
