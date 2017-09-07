const webpack = require('webpack');
const merge = require('webpack-merge');
const defaultConfig = require('./webpack.base.config');

module.exports = merge.smart(defaultConfig, {
  name: 'Production Build',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
