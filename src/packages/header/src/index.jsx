import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Header from './header'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Header />, document.getElementById('root'))
