import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './App'

import './global/styles.scss'

if (module.hot) {
  module.hot.accept()
}

const hotApp = hot(module)(<App />)

ReactDOM.render(<div>{hotApp}</div>, document.getElementById('root'))
