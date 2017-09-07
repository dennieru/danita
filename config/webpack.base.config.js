const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
    polyfills: './src/polyfills.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new ExtractTextPlugin('styles/[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['polyfills', 'vendor', 'manifest']
    })
  ],
  stats: {
    children: false
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    https: true,
    port: 3000
  }
}
