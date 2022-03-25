const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  "stories": [
    // FIXME: Pfade lokal zugreifbar machen
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
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
