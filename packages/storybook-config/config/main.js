const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const path = require("path")

module.exports = {
  "stories": [
    path.join(process.cwd(), "src/**/*.stories.@(js|jsx|ts|tsx|mdx)")
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  features: {
    // Activate on-demand loading of stories
    storyStoreV7: true,

    // Use our own Babel configuration
    babelModeV7: true,
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Add support for VanillaExtract
    config.plugins.push(new VanillaExtractPlugin())

    // Return the altered config
    return config;
  }
}
