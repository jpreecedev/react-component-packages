/* eslint-disable import/no-dynamic-require, global-require */

const { join, resolve } = require('path')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const log = require('./log')

const initialize = program => {
  const configFile = join(process.cwd(), program.webpackConfig)
  if (!configFile) {
    return new Error(
      'You must specify the path to the webpack configuration using --webpack-config'
    )
  }
  return { configFile }
}

const build = configPath => {
  const config = require(configPath)
  config.output = {
    ...config.output
  }

  config.entry = {
    main: resolve('./main.js')
  }

  delete config.externals

  Webpack(config, (err, stats) => {
    process.stdout.write(stats.toString())
  })
}

const start = configPath => {
  const config = require(configPath)
  const compiler = Webpack(config)
  const devServerOptions = {
    ...config.devServer
  }

  const server = new WebpackDevServer(compiler, devServerOptions)

  server.listen(config.devServer.port, '127.0.0.1', () => {
    log(`Starting server on http://localhost:${config.devServer.port}`)
  })
}

module.exports = {
  build,
  initialize,
  start
}
