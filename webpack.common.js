/*
    ./webpack.common.js
*/
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: './src/js/app.js',
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./src/js'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    CleanWebpackPluginConfig,
    HtmlWebpackPluginConfig
  ]
};
