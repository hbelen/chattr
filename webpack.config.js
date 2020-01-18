const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  target: 'web',
  entry: './client/index.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'dist/client'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new HtmlWebpackPlugin({ template: './client/index.html' }),
  ],
};

module.exports = config;
