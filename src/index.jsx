import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import './global/styles.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
