/* eslint-disable import/no-extraneous-dependencies */

import { resolve } from 'path'
import merge from 'webpack-merge'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'production',
  entry: {
    main: resolve('./main.js')
  },
  output: {
    filename: 'footer.js',
    libraryTarget: 'commonjs2'
  }
})
