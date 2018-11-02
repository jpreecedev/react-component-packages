import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'

import { Header } from '@react-component-packages/header'
import { Footer } from '@react-component-packages/footer'

import './global/styles.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <div>
    <Header />
    <main>Hello, world!</main>
    <Footer />
  </div>,
  document.getElementById('root')
)
