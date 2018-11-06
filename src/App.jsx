import * as React from 'react'
import { hot } from 'react-hot-loader'

import { Header } from '@react-component-packages/header'
import { Footer } from '@react-component-packages/footer'

function App() {
  return (
    <div>
      <Header />
      <main>Hello, world!</main>
      <Footer />
    </div>
  )
}

export default hot(module)(App)
