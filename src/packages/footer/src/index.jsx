import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'

import Footer from './footer'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Footer />, document.getElementById('root'))
