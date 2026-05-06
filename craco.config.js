module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        (warning) =>
          warning.module &&
          warning.module.resource &&
          warning.module.resource.includes(
            "node_modules/@mediapipe/tasks-vision",
          ) &&
          warning.message.includes("Failed to parse source map"),
      ];
      return webpackConfig;
    },
  },
  jest: {
    configure: (jestConfig) => {
      jestConfig.moduleNameMapper = {
        ...jestConfig.moduleNameMapper,
        "^canvas$": "<rootDir>/__mocks__/canvas.js",
      };
      jestConfig.testEnvironmentOptions = {
        ...jestConfig.testEnvironmentOptions,
        resources: "usable",
        pretendToBeVisual: true,
      };
      jestConfig.transformIgnorePatterns = [
        "node_modules/(?!(three|@react-three)/)",
      ];
      return jestConfig;
    },
  },
};
