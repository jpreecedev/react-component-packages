#!/usr/bin/env node

const program = require('commander')
const glob = require('glob')
const { join } = require('path')
const log = require('./src/log')
const { initialize, build, start } = require('./src/webpack')

program
  .version('1.0.0')
  .option('-d, --dev', 'Development Mode')
  .option('-p, --prod', 'Production Mode')
  .option('-wc, --webpack-config [path]', 'Webpack Configuration Path')
  .option('-b, --build', 'Build Webpack Bundle')
  .option('-s, --start', 'Start Webpack Dev Server')
  .parse(process.argv)

const result = initialize(program)
if (result instanceof Error) {
  log(result)
  return
}

const { buildMode, configPath } = result

log(`Finding configuration files in: ${configPath}`)
const configFiles = glob.sync(join(configPath, 'webpack.*.config.js'))
if (!configFiles.length) {
  log('Unable to find any Webpack configuration files using the provided path')
  return
}

const configFile = join(
  process.cwd(),
  configFiles.find(file => file.indexOf(`webpack.${buildMode}.config.js`) > -1)
)
log(`Using: ${configFile}`)

if (program.build) {
  build(configFile)
} else if (program.start) {
  start(configFile)
}
