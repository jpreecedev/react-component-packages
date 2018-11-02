#!/usr/bin/env node

/* eslint-disable class-methods-use-this */

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/webpack.config')

const BUILD_MODE = process.argv[2]

// webpack(config, (err, stats) => {
//   process.stdout.write(stats.toString())
// })

const compiler = webpack(config)
const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
})
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(config.devServer.port, '127.0.0.1', () => {
  console.log(`Starting server on http://localhost:${config.devServer.port}`)
})
