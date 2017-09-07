const merge = require('webpack-merge');
const defaultConfig = require('./webpack.base.config');

module.exports = merge.smart(defaultConfig, {
  name: 'Development Build'
});
