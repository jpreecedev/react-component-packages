const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const isDevelopment = process.env.NODE_ENV !== 'production'

let config = {
  target: 'node',
  externals: nodeExternals(),
  entry: {
    main: './src/server/index.jsx'
  },
  output: {
    filename: './server/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  }
}

if (isDevelopment) {
  config = {
    ...config,
    devServer: {
      port: 9955
    },
    devtool: 'source-map'
  }
}

module.exports = merge(common, config)
