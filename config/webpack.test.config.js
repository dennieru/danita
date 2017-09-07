const merge = require('webpack-merge');
const defaultConfig = require('./webpack.base.config');

delete defaultConfig.entry;
module.exports = {
  name: 'Test Build',
  output: defaultConfig.output,
  module: defaultConfig.module
};
