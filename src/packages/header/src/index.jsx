import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'

import Header from './header'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Header />, document.getElementById('root'))
