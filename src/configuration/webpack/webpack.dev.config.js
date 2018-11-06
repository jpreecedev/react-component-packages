/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9955',
    'webpack/hot/only-dev-server'
  ],
  devServer: {
    port: 9955,
    hot: true
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
})
