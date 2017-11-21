const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  watch: true,
  entry: {
    /* app: './js/index.js',*/
    css: './scss/main.scss',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true || {/* CSSNano Options */}
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      {from: '../src/images', to: 'images'}
    ]),
    new CleanWebpackPlugin(['dist']),
  ]
}