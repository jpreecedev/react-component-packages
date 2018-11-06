#!/usr/bin/env node

const program = require('commander')
const log = require('./src/log')
const { initialize, build, start } = require('./src/webpack')

program
  .version('1.0.0')
  .option('-wc, --webpack-config [path]', 'Webpack Configuration Path')
  .option('-b, --build', 'Build Webpack Bundle')
  .option('-s, --start', 'Start Webpack Dev Server')
  .parse(process.argv)

const result = initialize(program)
if (result instanceof Error) {
  log(result)
  return
}

const { configFile } = result

log(`Using: ${configFile}`)

if (program.build) {
  build(configFile)
} else if (program.start) {
  start(configFile)
}
