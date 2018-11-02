import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'

import './global/styles.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<div>Hello, world!</div>, document.getElementById('root'))
