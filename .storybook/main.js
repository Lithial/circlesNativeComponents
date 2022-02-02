const custom = require('../webpack.config.js');

module.exports = {
  "stories": ['../src/components/**/*.stories.[tj]s'],
  "addons": ["@storybook/addon-actions","@storybook/addon-knobs"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { ...config.resolve, alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
};
