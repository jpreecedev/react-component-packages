/* eslint-disable import/no-dynamic-require, global-require */

const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const log = require('./log')

const initialize = program => {
  const buildMode = program.dev ? 'dev' : 'prod'
  if (!buildMode) {
    return new Error('You must specify the build mode using --dev or --prod')
  }

  const configPath = program.webpackConfig
  if (!configPath) {
    return new Error(
      'You must specify the path to the webpack configuration using --webpack-config'
    )
  }
  return { configPath, buildMode }
}

const build = configPath => {
  const config = require(configPath)
  Webpack(config, (err, stats) => {
    process.stdout.write(stats.toString())
  })
}

const start = configPath => {
  const config = require(configPath)
  const compiler = Webpack(config)
  const devServerOptions = Object.assign({}, config.devServer, {
    stats: {
      colors: true
    }
  })
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
