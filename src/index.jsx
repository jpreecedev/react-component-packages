import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import './global/styles.scss'

ReactDOM.hydrate(<App />, document.getElementById('root'))
